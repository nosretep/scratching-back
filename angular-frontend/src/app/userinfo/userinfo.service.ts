import { Injectable } from '@angular/core';
import { Userinfo } from './userinfo';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserinfoService {
  constructor(private httpClient: HttpClient) {}

  getUserinfo() {
    return this.httpClient.get<Userinfo>("/auth/userinfo")
  }

  handleError(error: HttpErrorResponse) {
    //To know the version of RxJS npm list --depth=0 (I for this example im on version 5.5)
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred: ', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}` + ` body was: ${error.message}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

}
