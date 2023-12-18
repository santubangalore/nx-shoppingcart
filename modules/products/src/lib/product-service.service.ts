/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { product } from '../lib/model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  apiUrl:string;
  constructor(private http:HttpClient) {
    this.apiUrl= 'http://localhost:57309/';  //environment.apiUrl;
   }

   getSearchResult(search:string):Observable<product[]> {
      return this.makeHttpGetCall(this.apiUrl+`api/product/getProducts/`+`${search}`);
   }

   makeHttpGetCall(url:string){
    return this.http.get(url)
    .pipe(catchError(response => this.parseError(response)),

    map(response => {
      return response;
    })); 
   }

  parseError(error: string): Observable<any>{
    throw throwError(error);
  }

}
