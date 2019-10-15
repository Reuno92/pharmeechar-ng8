import {inject, TestBed} from '@angular/core/testing';

import { TypeProductService } from './type-product.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpEvent, HttpEventType} from '@angular/common/http';

describe('TypeProduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TypeProductService]
    });
  });

  it('should return an httpResponse Array of TypProduct', inject(
    [HttpTestingController, TypeProductService],
    (httpMock: HttpTestingController, typeProductService: TypeProductService) => {
        const mockTypeProducts = [
          {
            "id": 1,
            "name": "armchair"
          },
          {
            "id": 2,
            "name": "sofa"
          },
          {
            "id": 3,
            "name": "office"
          },
          {
            "id": 4,
            "name": "bed"
          }
        ];

      typeProductService.getAllRef()
          .subscribe( (event: HttpEvent<any>) => {
            switch (event.type) {
              case HttpEventType.Response:
                expect(event.body).toBe(mockTypeProducts);
            }
          });

        const req = httpMock.expectOne(typeProductService.typeProductPath, 'Search all type of product');

        expect(req.request.method).toBe('GET');
        expect(req.cancelled).toBeFalsy();
        expect(req.request.responseType).toBe('json');

        req.flush(mockTypeProducts);

        httpMock.verify();
    })
  );

  it('should return an httpResponse of TypeProduct with one parameter 3.', inject(
    [HttpTestingController, TypeProductService],
    (httpMock: HttpTestingController, typeProductService: TypeProductService) => {
      const mockTypeProduct = { 'id': 3, 'name': "office" };

      typeProductService.getSingleRef(3)
        .subscribe( (event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toBe(mockTypeProduct);
          }
        });

      const req = httpMock.expectOne(
        typeProductService.typeProductPath + '/' + 3,
        'Search the third type of product');

      expect(req.request.method).toBe('GET');
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toBe('json');
      req.flush(mockTypeProduct);

      httpMock.verify();
    })
  );
});
