import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
//import { catchError, retry } from 'rxjs/operators';
//import { NGXLogger } from 'ngx-logger';
//import { RequestOptions, RequestOptionsArgs } from '@angular/http';
//import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiurl = "https://spoonacular.com/food/ingredients/search?apiKey=1c8977209bfb4c1c8040cc168d742cdd&query=apple";
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiurl);
  }
  

  // getDataWithHeader(uri: string): Observable<any> {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Access-Control-Allow-Origin', 'http://localhost:3020');
  //   headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  //   let options = {
  //     headers: headers
  //        };
  //   return this.http.get(uri,options);
  // }

  
}
