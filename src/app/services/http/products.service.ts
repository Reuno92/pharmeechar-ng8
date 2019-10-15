import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
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
    return this.http.get<Products[]>(this.productPath,
      {
        headers: new HttpHeaders(),
        responseType: 'json',
        reportProgress: true,
        observe: 'response'
      });
  }

  /**
   * Get product by different filter
   */
  public getProductsByFilter() {}

  /**
   * Create a product
   */
  public setProducts() {}

  /**
   * update a product
   * @Param id
   */
  public updateProduct(id) {}

}
