import "server-only";
import { Resource } from "./types/resource";
import { LoaderModule } from "./types/loader-module";
import { ResourceOptions } from "./types/resource-options";
import { revalidateTag } from "next/cache";

type OnlyResult<T> = Resource<T, ResourceOptions>;

type ExtractResults<T extends Resource<unknown, ResourceOptions>[]> =
  T extends [infer U, ...infer V]
    ? U extends OnlyResult<infer W>
      ? V extends OnlyResult<unknown>[]
        ? [W, ...ExtractResults<V>]
        : never
      : never
    : T extends Resource<infer W, ResourceOptions>[]
      ? W[]
      : [];

// TODO: Error 처리
/**
 * loader 구현체를 생성합니다.
 */
export default function createLoader({ fetcher, revalidator }: LoaderModule) {
  return function loader<T extends Resource<unknown, ResourceOptions>[]>(
    ...resources: T
  ): [() => Promise<ExtractResults<T>>, () => Promise<void>] {
    /**
     * 지정한 리소스를 한 번에 로드합니다.
     */
    async function load() {
      return Promise.all(
        resources.map((resource) => resource.load(fetcher))
      ) as Promise<ExtractResults<T>>;
    }

    /**
     * 지정한 리소스에 대해 한 번에 재검증을 요청합니다.
     */
    async function revalidate() {
      const hashedTags = resources
        .map((resource) =>
          resource.tags.current.map((tag) => resource.__tagHash[tag])
        )
        .flat();

      hashedTags.forEach(revalidator);
    }

    return [load, revalidate];
  };
}
