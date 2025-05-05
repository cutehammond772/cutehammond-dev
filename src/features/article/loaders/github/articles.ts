import "server-only";
import * as z from "zod";

import { Octokit } from "octokit";

import { createResourceBuilder } from "@/shared/utils/lib/loader/resource-builder";
import { ResourceOptions } from "@/shared/utils/lib/loader/types/resource-options";
import hierarchy from "@/shared/utils/lib/loader/hierarchy";
import { loader } from "@/shared/utils/loader";
import article from "./article";

interface GithubArticlesRequest {
  user: string;
  repo: string;
  path: string;
}

interface GithubArticlesOptions
  extends GithubArticlesRequest,
    ResourceOptions {}

export default createResourceBuilder(
  (request: GithubArticlesRequest) => {
    return {
      ...request,
      tags: hierarchy(
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
