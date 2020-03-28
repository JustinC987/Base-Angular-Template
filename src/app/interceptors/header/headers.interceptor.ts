import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpHeaders,
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  
  export class HeadersInterceptor implements HttpInterceptor {
    public userToken: string;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // Clone the request to add the new header
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + this.userToken
        })

      const clonedRequest = req.clone({ headers: headers });
  
      // Pass the cloned request instead of the original request to the next handle
      return next.handle(clonedRequest);
    }
  }