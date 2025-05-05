import "server-only";

import { Resource } from "./types/resource";
import { LoaderDependencies } from "./types/loader-dependencies";
import { ResourceOptions } from "./types/resource-options";

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
export default function loaderInstance({
  fetcher,
  revalidator,
}: LoaderDependencies) {
  return function loader<T extends Resource<unknown, ResourceOptions>[]>(
    ...resources: T
  ): [() => Promise<ExtractResults<T>>, () => Promise<void>] {
    const hashedTags = resources
      .map((resource) =>
        resource.tags.current.map((tag) => resource.__tagHash[tag])
      )
      .flat();

    // Hash 처리된 Tag를 revalidator에 바인딩합니다.
    const revalidate = revalidator.bind(null, hashedTags);

    /**
     * 지정한 리소스를 한 번에 로드합니다.
     */
    async function load() {
      return Promise.all(
        resources.map((resource) => resource.load(fetcher))
      ) as Promise<ExtractResults<T>>;
    }

    return [load, revalidate];
  };
}
