import { HttpStatus } from '@nestjs/common';

export type THttpResponse<TData> = {
  status: HttpStatus;
  data: TData;
};
