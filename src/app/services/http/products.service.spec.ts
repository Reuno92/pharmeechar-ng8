import {inject, TestBed} from '@angular/core/testing';

import {ProductsService} from './products.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {Products} from '../../models/Products';

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

        const MOCK_PRODUCT = {
          id: 5,
          name: 'Ganesh',
          width: 82,
          depth: 96,
          height: 101,
          colorId: [3, 5, 2],
          typeId: 'office'
        };

        productService.getSingleProduct(MOCK_PRODUCT.id)
          .subscribe((event: HttpEvent<any>) => {
            switch (event.type) {
              case HttpEventType.Response:
                expect(event.body).toEqual(MOCK_PRODUCT);
                break;
              case HttpEventType.ResponseHeader:
                expect(event.status).toBe(200);
                break;
            }
          });

        const req = httpMock.expectOne(productService.productPath + '/' + MOCK_PRODUCT.id,
          'return ganesh product with it id');
        expect(req.request.method).toBe('GET');
        expect(req.cancelled).toBeFalsy();
        expect(req.request.responseType).toEqual('json');

        req.flush({});

        httpMock.verify();
      });
  });

  it('Should return all product\'s list',
    inject(
      [HttpTestingController, ProductsService],
      (httpMock: HttpTestingController, productService: ProductsService) => {
        const MOCK_PRODUCTS = [
          {
            id: 1,
            name: 'Brahma',
            width: 82,
            depth: 96,
            height: 101,
            colorId: [1, 5, 6],
            typeId: 'armchair'
          },
          {
            id: 2,
            name: 'Vishnou',
            width: 82,
            depth: 96,
            height: 101,
            colorId: [2, 4, 7],
            typeId: 'sofa'
          },
          {
            id: 3,
            name: 'Shiva',
            width: 82,
            depth: 96,
            height: 101,
            colorId: [2, 4, 7],
            typeId: 'sofa'
          },
          {
            id: 4,
            name: 'Parvati',
            width: 82,
            depth: 96,
            height: 101,
            colorId: [5, 8, 2],
            typeId: 'sofa'
          },
          {
            id: 5,
            name: 'Ganesh',
            width: 82,
            depth: 96,
            height: 101,
            colorId: [3, 5, 2],
            typeId: 'office'
          },
          {
            id: 6,
            name: 'Hanuman',
            width: 82,
            depth: 96,
            height: 101,
            colorId: [3, 5, 2],
            typeId: 'office'
          },
          {
            id: 7,
            name: 'Ishana',
            width: 82,
            depth: 96,
            height: 101,
            colorId: [3, 5, 2],
            typeId: 'office'
          },
          {
            id: 8,
            name: 'Rāma',
            width: 82,
            depth: 96,
            height: 101,
            colorId: [3, 5, 2],
            typeId: 'bed'
          },
          {
            id: 9,
            name: 'Shani',
            width: 82,
            depth: 96,
            height: 101,
            colorId: [3, 5, 2],
            typeId: 'bed'
          },
          {
            id: 10,
            name: 'Trishiras',
            width: 82,
            depth: 96,
            height: 101,
            colorId: [7, 8, 2],
            typeId: 'bed'
          },
          {
            id: 11,
            name: 'Vasudeva',
            width: 82,
            depth: 96,
            height: 101,
            colorId: [2, 3, 5],
            typeId: 'armchair'
          },
          {
            id: 12,
            name: 'Yaksha',
            width: 82,
            depth: 96,
            height: 101,
            colorId: [1, 2, 8],
            typeId: 'armchair'
          }
        ];

        productService.getAllProducts()
          .subscribe((event: HttpEvent<any>) => {
            switch (event.type) {
              case HttpEventType.Response:
                expect(event.body).toEqual(MOCK_PRODUCTS);
                break;
              case HttpEventType.ResponseHeader:
                expect(event.status).toBe(200);
                break;
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

  it('Should create a vamana product',
    inject(
      [HttpTestingController, ProductsService],
      (httpMock: HttpTestingController, productService: ProductsService) => {
        const MOCK_PRODUCTS: Products = {
            id: 13,
            name: 'Vamana',
            width: 56,
            depth: 95,
            height: 132,
            weight: 55,
            colorId: [5, 4, 1],
            typeId: 1
          };

        productService.setProduct(MOCK_PRODUCTS)
          .subscribe((data) => {
            expect(data.body.id).toEqual(13);
            expect(data.body.name).toEqual('Vamana');
            expect(data.body.width).toEqual(56);
            expect(data.body.depth).toEqual(95);
            expect(data.body.height).toEqual(132);
            expect(data.body.colorId).toEqual([5, 4, 1]);
            expect(data.body.typeId).toEqual(1);
          });

        const req = httpMock.expectOne(productService.productPath,
          'create a product named Vamana');

        expect(req.request.method).toBe('POST');
        expect(req.cancelled).toBeFalsy();
        expect(req.request.responseType).toEqual('json');

        req.flush(MOCK_PRODUCTS);
        httpMock.verify();
      })
  );

  it('should update Vamana',
    inject(
      [HttpTestingController, ProductsService],
      (httpMock: HttpTestingController, productService: ProductsService) => {
        const MOCK_PRODUCT: Products = {
          id: 13,
          name: 'Vamana',
          width: 50,
          depth: 90,
          height: 130,
          weight: 50,
          colorId: [5, 1, 4],
          typeId: 1
        };

        productService.updateProduct(MOCK_PRODUCT.id, MOCK_PRODUCT)
          .subscribe( (event: HttpEvent<any>) => {
            switch (event.type) {
              case HttpEventType.ResponseHeader:
                expect(event.status).toBe(200);
            }
          });

        const req = httpMock.expectOne(productService.productPath + '/' + MOCK_PRODUCT.id);

        expect(req.cancelled).toBeFalsy();
        expect(req.request.method).toBe('PUT');

        req.flush(MOCK_PRODUCT);
        httpMock.verify();
      }
    )
  );
});
