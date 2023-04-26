import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_ENDPOINT = '';
  constructor(private httpClient: HttpClient) {
    this.API_ENDPOINT = '/api/products'
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<any[]>(this.API_ENDPOINT)
  }

  getProduct(id: number | string): Observable<Product> {
    return this.httpClient.get<Product>(this.API_ENDPOINT + "/" + id)
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient
      .post<Product>(
        this.API_ENDPOINT,
        product
      )
      .pipe(catchError(this.handleError))
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
