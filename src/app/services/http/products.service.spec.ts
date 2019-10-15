import {inject, TestBed} from '@angular/core/testing';

import {ProductsService} from './products.service';
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
          'id': 5,
          'name': 'Ganesh',
          'width': 82,
          'depth': 96,
          'height': 101,
          'fk_color': [3, 5, 2],
          'type': 'office'
        };

        productService.getSingleProduct(id)
          .subscribe((event: HttpEvent<any>) => {
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

  it('Should return all product\'s list',
    inject(
      [HttpTestingController, ProductsService],
      (httpMock: HttpTestingController, productService: ProductsService) => {
        const MOCK_PRODUCTS = [
          {
            'id': 1,
            'name': 'Brahma',
            'width': 82,
            'depth': 96,
            'height': 101,
            'fk_color': [1, 5, 6],
            'type': 'armchair'
          },
          {
            'id': 2,
            'name': 'Vishnou',
            'width': 82,
            'depth': 96,
            'height': 101,
            'fk_color': [2, 4, 7],
            'type': 'sofa'
          },
          {
            'id': 3,
            'name': 'Shiva',
            'width': 82,
            'depth': 96,
            'height': 101,
            'fk_color': [2, 4, 7],
            'type': 'sofa'
          },
          {
            'id': 4,
            'name': 'Parvati',
            'width': 82,
            'depth': 96,
            'height': 101,
            'fk_color': [5, 8, 2],
            'type': 'sofa'
          },
          {
            'id': 5,
            'name': 'Ganesh',
            'width': 82,
            'depth': 96,
            'height': 101,
            'fk_color': [3, 5, 2],
            'type': 'office'
          },
          {
            'id': 6,
            'name': 'Hanuman',
            'width': 82,
            'depth': 96,
            'height': 101,
            'fk_color': [3, 5, 2],
            'type': 'office'
          },
          {
            'id': 7,
            'name': 'Ishana',
            'width': 82,
            'depth': 96,
            'height': 101,
            'fk_color': [3, 5, 2],
            'type': 'office'
          },
          {
            'id': 8,
            'name': 'Rāma',
            'width': 82,
            'depth': 96,
            'height': 101,
            'fk_color': [3, 5, 2],
            'type': 'bed'
          },
          {
            'id': 9,
            'name': 'Shani',
            'width': 82,
            'depth': 96,
            'height': 101,
            'fk_color': [3, 5, 2],
            'type': 'bed'
          },
          {
            'id': 10,
            'name': 'Trishiras',
            'width': 82,
            'depth': 96,
            'height': 101,
            'fk_color': [7, 8, 2],
            'type': 'bed'
          },
          {
            'id': 11,
            'name': 'Vasudeva',
            'width': 82,
            'depth': 96,
            'height': 101,
            'fk_color': [2, 3, 5],
            'type': 'armchair'
          },
          {
            'id': 12,
            'name': 'Yaksha',
            'width': 82,
            'depth': 96,
            'height': 101,
            'fk_color': [1, 2, 8],
            'type': 'armchair'
          }
        ];

        productService.getAllProducts()
          .subscribe((event: HttpEvent<any>) => {
            switch (event.type) {
              case HttpEventType.Response:
                expect(event.body).toEqual(MOCK_PRODUCTS);
            }
          });

        const req = httpMock.expectOne(productService.productPath,
          'Search all products');

        expect(req.request.method).toBe('GET');
        expect(req.cancelled).toBeFalsy();
        expect(req.request.responseType).toEqual('json');

        req.flush(MOCK_PRODUCTS);
        httpMock.verify();
      })
  );
});
