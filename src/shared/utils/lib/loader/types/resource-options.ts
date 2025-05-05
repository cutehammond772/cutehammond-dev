import { Resource } from "./resource";

export type ResourceOptions = {
  /**
   * 재검증까지 필요한 시간을 설정합니다.
   *
   * same as: **staleTime**
   */
  revalidate?: number;

  /**
   * 한 서버 요청의 생명주기에서 동일한 Resource 요청의 캐시 여부를 설정합니다.
   *
   * same as: **React.cache()** 함수 사용 여부
   */
  disableRequestMemo?: boolean;

  /**
   * 이 Resource의 Tag를 설정합니다.
   */
  tags: string | string[];

  /**
   * 해당 리소스의 외부 의존성을 설정합니다.
   *
   * 즉 외부 리소스에서 재검증 요청이 발생하면, 이 리소스도 영향을 받습니다.
   */
  externalDeps?: {
    parents: Resource<unknown, ResourceOptions>[];
  };
};
