import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Products} from '../../models/Products';
import {API} from '../../constant/API';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiPath: API;
  public productPath: string;

  constructor(public http: HttpClient) {
    this.apiPath = new API();
    this.productPath = this.apiPath.HOST + this.apiPath.PORT + this.apiPath.PRODUCTS;
  }

  /**
   * Get one product
   * @Param id
   */
  public getSingleProduct(id): Observable<HttpResponse<Products>> {
    return this.http.get<Products>(this.productPath + '/' + id,
      {
        headers: new HttpHeaders(),
        responseType: 'json',
        reportProgress: true,
        observe: 'response'
      });
  }

  /**
   * Get All products
   */
  public getAllProducts(): Observable<HttpResponse<Products[]>> {
    return this.http.get<Products[]>(this.productPath, {
      headers: new HttpHeaders(),
      observe: 'response',
      responseType: 'json',
      reportProgress: true
    });
  }

  /**
   * Get product by different filter
   */
  public getProductsByFilter() {}

  /**
   * Create a product
   */
  public setProduct(payload: Products): Observable<HttpResponse<Products>> {
    return this.http.post<Products>(this.productPath,
      payload,
      {
        headers: new HttpHeaders(),
        observe: 'response',
        responseType: 'json',
        reportProgress: true
      });
  }

  /**
   * update a product
   * @Param id
   */
  public updateProduct(id, payload): Observable<HttpResponse<Products>> {
    return this.http.put<Products>(this.productPath + '/' + id,
      payload,
      {
        headers: new HttpHeaders(),
        observe: 'response',
        responseType: 'json',
        reportProgress: true
      });
  }

}
