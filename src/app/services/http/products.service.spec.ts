import {inject, TestBed} from '@angular/core/testing';

import { ProductsService } from './products.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpEvent, HttpEventType} from '@angular/common/http';

describe('ProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });
  });


  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });

  it('should get an product equal name is Ganesh', () => {
    inject(
      [HttpClientTestingModule, ProductsService],
      (httpMock: HttpTestingController, productService: ProductsService) => {

          const id = 5;
          const MOCK_PRODUCT = {
          "id": 5,
          "name": "Ganesh",
          "width": 82,
          "depth": 96,
          "height": 101,
          "fk_color": [3, 5, 2],
          "type" : "office"
        };

          productService.getSingleProduct(id)
            .subscribe( (event: HttpEvent<any>) => {
              switch (event.type) {
                case HttpEventType.Response:
                  expect(event.body).toEqual(MOCK_PRODUCT);
              }
            });

          const req = httpMock.expectOne(productService.productPath + '/' + id,
            'return ganesh product with it id');
            expect(req.request.method).toBe('GET');
            expect(req.cancelled).toBeFalsy();
            expect(req.request.responseType).toEqual('json');

            req.flush(MOCK_PRODUCT);

            httpMock.verify();
        });
  });

});
