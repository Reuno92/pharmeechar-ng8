import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {TypeProducts} from '../../models/typeProducts';
import {Observable} from 'rxjs';
import {API} from '../../constant/API';

const apiPath: API = new API();

@Injectable({
  providedIn: 'root'
})
export class TypeProductService {

  public typeProductPath;

  constructor(private http: HttpClient) {
    this.typeProductPath = apiPath.HOST + apiPath.PORT + '/' + apiPath.TYPE_PRODUCT;
  }

  public getAllRef(): Observable<HttpResponse<TypeProducts[]>> {
    return this.http.get<TypeProducts[]>(this.typeProductPath, {
      headers : new HttpHeaders(), responseType: 'json', reportProgress: true, observe: 'response'
    });
  }

  public getSingleRef(id): Observable<HttpResponse<TypeProducts>> {
    return this.http.get<TypeProducts>(this.typeProductPath + '/' + id, {
      headers: new HttpHeaders(), responseType: 'json', reportProgress: true, observe: 'response'
    });
  }
}
