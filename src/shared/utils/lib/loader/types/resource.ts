import { LoaderModule } from "./loader-module";
import { ResourceOptions } from "./resource-options";

export type ResourceBuilder<Result, Options extends ResourceOptions> = (
  options: Options
) => Pick<Resource<Result, Options>, "load">;

/**
 * Resource를 로드하는 데 필요한 정보가 담긴 객체입니다.
 */
export type Resource<Result, Options extends ResourceOptions> = {
  /**
   * Resource를 생성할 때 사용된 Option입니다.
   *
   * **경고**: 내부에서 사용되는 프로퍼티이므로 프로덕션에서 사용하지 마세요.
   */
  __options: Options;

  /**
   * 각 tag와 일대일로 대응되는 고유 값입니다.
   *
   * **경고**: 내부에서 사용되는 프로퍼티이므로 프로덕션에서 사용하지 마세요.
   */
  __tagHash: Record<string, string>;

  tags: {
    parents: string[];
    current: string[];
  };

  load: (fetcher: LoaderModule["fetcher"]) => Promise<Result>;
};
