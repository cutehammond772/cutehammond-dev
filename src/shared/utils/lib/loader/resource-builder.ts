import "server-only";
import React from "react";

import { ResourceOptions } from "./types/resource-options";
import { Resource, ResourceBuilder } from "./types/resource";
import { convertToHash } from "../hash";

function resolveTags<Options extends ResourceOptions>(
  { tags, externalDeps }: Options,
  convertor: (target: string) => string
): {
  tags: Resource<unknown, Options>["tags"];
  hash: Resource<unknown, Options>["__tagHash"];
} {
  const parentResources = externalDeps?.parents ?? [];

  const currentTags = Array.isArray(tags) ? [...tags] : [tags];
  const tagsFromParents = parentResources.map((val) => val.tags.current).flat();

  const hash = {
    ...Object.fromEntries(currentTags.map((tag) => [tag, convertor(tag)])),
    ...Object.fromEntries(
      parentResources.flatMap(({ tags, __tagHash }) =>
        tags.current.map((tag) => [tag, __tagHash[tag]])
      )
    ),
  };

  return {
    tags: {
      current: currentTags,
      parents: tagsFromParents,
    },
    hash,
  };
}

/**
 * loader에 사용될 Resource를 만드는 Builder를 생성합니다.
 */
export default function createResourceBuilder<
  RequestOption,
  Result,
  Options extends ResourceOptions,
>(
  optionResolver: (request: RequestOption) => Options,
  builder: ResourceBuilder<Result, Options>
): (request: RequestOption) => Resource<Result, Options> {
  return function (request: RequestOption) {
    const options = optionResolver(request);
    const builderInfo = builder(options);
    const { tags, hash } = resolveTags(options, convertToHash);

    const load: Resource<Result, Options>["load"] = async (fetcher) => {
      // fetch 시 특정 리소스에 대한 태그를 부여합니다.
      const hashedTags = Object.values(hash);

      return builderInfo.load(
        async (...[input, init]: Parameters<typeof fetcher>) =>
          fetcher(input, {
            ...init,
            next: {
              ...init?.next,
              tags: hashedTags,
              revalidate: options.revalidate,
            },
          })
      );
    };

    return {
      load: options.disableRequestMemo ? load : React.cache(load),

      tags,
      __options: options,
      __tagHash: hash,
    };
  };
}
