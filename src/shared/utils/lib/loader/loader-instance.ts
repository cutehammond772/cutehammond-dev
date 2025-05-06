import "server-only";

import type { Resource } from "./types/resource";
import type { Loader } from "./types/loader";
import type { ResourceOptions } from "./types/resource-options";

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
export default function loaderInstance({ fetch, revalidate }: Loader) {
  return function loader<T extends Resource<unknown, ResourceOptions>[]>(
    ...resources: T
  ): [() => Promise<ExtractResults<T>>, () => Promise<void>] {
    // 재검증 대상인 Tag 각각에 대응하는 고유 값으로 매핑합니다.
    const hashedTags = resources
      .map((resource) =>
        resource.tags.current.map((tag) => resource.__tagHash[tag])
      )
      .flat();

    const bindedRevalidate = revalidate.bind(null, hashedTags);

    /**
     * 지정한 리소스를 한 번에 로드합니다.
     */
    async function load() {
      return Promise.all(
        resources.map((resource) => resource.load(fetch))
      ) as Promise<ExtractResults<T>>;
    }

    return [load, bindedRevalidate];
  };
}
