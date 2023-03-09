import { HttpException, HttpStatus } from '@nestjs/common';
import { THttpResponse } from 'src/types/types/api.types';

export const HttpResponse = <TData = any>(
  data: TData,
  status: HttpStatus = HttpStatus.OK,
): THttpResponse<TData> => ({
  data,
  status,
});

export function HttpError(error: any) {
  if (Boolean(error?.status && error?.message)) {
    throw new HttpException(error.message, error.status);
  }
  throw new HttpException(error?.message || 'Forbidden', HttpStatus.FORBIDDEN);
}
