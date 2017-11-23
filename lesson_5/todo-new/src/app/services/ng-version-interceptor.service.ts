import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NgVersionInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);

    req = req.clone({
      setHeaders: {'X-Frontend-By': 'Angular v.4.4.6'}
    });

    return next.handle(req);
  }

}
