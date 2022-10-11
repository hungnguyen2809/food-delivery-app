interface BaseResponse<T = any> {
  data: T;
  code: number;
  status: boolean;
  message: string;
}
