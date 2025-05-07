import type { Resource } from "./resource";

export type ResourceOptions = {
  /**
   * 재검증까지 필요한 시간을 설정합니다.
   *
   * same as: **staleTime**
   */
  revalidate?: number;

  /**
   * 한 서버 요청의 생명주기에서 발생한 동일한 Resource 요청의 캐시 여부를 설정합니다.
   *
   * same as: **React.cache()** 함수 사용 여부
   */
  disableRequestMemo?: boolean;

  /**
   * 이 Resource의 태그를 설정합니다.
   */
  tags: string | string[];

  /**
   * 해당 리소스의 상위 의존성을 지정합니다.
   *
   * 즉 상위 리소스에서 재검증 요청이 발생하면, 이 리소스도 재검증이 요청됩니다.
   */
  parents?: Resource[];
};
