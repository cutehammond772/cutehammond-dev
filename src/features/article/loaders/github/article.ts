import "server-only";
import { z } from "zod/v4";

import { Octokit } from "octokit";
import { decode } from "@/shared/lib/base64";
import matter from "gray-matter";
import { buildResource, ResourceOptions } from "@h1y/next-loader";
import { hierarchicalTags } from "@h1y/next-loader/utils";

interface GithubArticleRequest {
  user: string;
  repo: string;
  path: string;
  name: string;
}

interface GithubArticleOptions extends GithubArticleRequest, ResourceOptions {}

export default buildResource(
  (request: GithubArticleRequest) => {
    return {
      ...request,
      tags: hierarchicalTags(
        "github",
        `user:${request.user}`,
        `repo:${request.repo}`,
        `path:${request.path}`,
        `name:${request.name}`
      ),
    };
  },
  (options: GithubArticleOptions) => ({
    async load(fetch) {
      const { data } = await octokit.rest.repos.getContent({
        owner: options.user,
        repo: options.repo,
        path: `${options.path}/${options.name}.mdx`,
        request: { fetch },
      });

      const { content: rawContent } = validator.content.parse(data);
      const markdown = matter(rawContent);
      const frontMatter = validator.metadata.parse(markdown.data);

      return {
        title: options.name,
        content: markdown.content,
        ...frontMatter,
      };
    },
  })
);

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const validator = {
  content: z.object({
    content: z.string().transform((content) => decode(content)),
  }),
  metadata: z.object({
    tag: z.array(z.string()),
    createdDate: z.date(),
    modifiedDate: z.date(),
  }),
};
