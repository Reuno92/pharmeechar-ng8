import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }

  /**
   * Get one product
   */
  public getSingleProduct() {}

  /**
   * Get All products
   */
  public getAllProducts() {}

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
   */
  public updateProduct() {}

  /**
   * Delete a products
   */
  public deleteProduct() {}
}
