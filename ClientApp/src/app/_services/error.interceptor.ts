import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, pipe, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export class ErrorInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  return next.handle(req)
  pipe(catchError((error: HttpErrorResponse)=>{
    console.log(error);
    if(error.status===400){
      return throwError(error.error.message);
    }
   else{
     return throwError("sdas");
    }
  }))}
  
}