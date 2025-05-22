import "server-only";
import { z } from "zod/v4";

import { Octokit } from "octokit";
import { loader } from "@/shared/lib/loader";
import article from "./article";
import { hierarchicalTags } from "@h1y/next-loader/utils";
import { buildResource, ResourceOptions } from "@h1y/next-loader";

interface GithubArticlesRequest {
  user: string;
  repo: string;
  path: string;
}

interface GithubArticlesOptions
  extends GithubArticlesRequest,
    ResourceOptions {}

export default buildResource(
  (request: GithubArticlesRequest) => {
    return {
      ...request,
      tags: hierarchicalTags(
        "github",
        `user:${request.user}`,
        `repo:${request.repo}`,
        `path:${request.path}`
      ),
    };
  },
  (options: GithubArticlesOptions) => ({
    async load(fetch) {
      // 1. 아티클 목록 불러오기
      const { data } = await octokit.rest.repos.getContent({
        owner: options.user,
        repo: options.repo,
        path: options.path,
        request: { fetch },
      });

      const articles = validator.list
        .parse(data)
        .filter((entry) => entry.name.endsWith(".mdx"))
        .map((entry) => entry.name.replace(".mdx", ""));

      // 2. 각각의 아티클 불러오기
      const infos = articles.map((name) =>
        article({
          ...options,
          name,
        })
      );

      const [loadAll] = loader(...infos);

      return await loadAll();
    },
  })
);

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const validator = {
  list: z.array(
    z.object({
      name: z.string(),
    })
  ),
};
