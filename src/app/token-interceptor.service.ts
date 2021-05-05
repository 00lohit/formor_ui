import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: any, next: any) {
    let configService = this.injector.get(ConfigService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${configService.getToken()}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}
