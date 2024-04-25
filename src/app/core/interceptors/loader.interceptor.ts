import { type HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { LoaderStoreService } from '../store/loader-store.service';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderStoreService = inject(LoaderStoreService);

  return next(req).pipe(
    tap(event => {
      loaderStoreService.show();
    }),
    finalize(() => {
      loaderStoreService.hide();
    })
  );
};

