import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add a custom header (e.g., Authorization)
    let actuveUser:any  = localStorage.getItem('activeUser');
    actuveUser = JSON.parse(actuveUser);
    console.log("actuveUser",actuveUser)
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${actuveUser?.token}`
      }
    });

    // Log the intercepted request
    console.log('Intercepted Request:', authReq);

    // Pass the modified request to the next handler
    return next.handle(authReq);
  }
}
