import {inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {ColorsService} from './colors.service';
import {HttpEvent, HttpEventType} from '@angular/common/http';

describe('ColorService ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ColorsService]
    });
  });

  it('should get an color equal red',
    inject(
      [HttpTestingController, ColorsService],
      (httpMock: HttpTestingController, colorsService: ColorsService) => {
        const MOCK_COLOR = {id: 1, name: 'red'};

        colorsService.getSingleColor(1)
          .subscribe((event: HttpEvent<any>) => {
            switch (event.type) {
              case HttpEventType.Response:
                expect(event.body).toEqual(MOCK_COLOR);
            }
          });

        const req = httpMock.expectOne(colorsService.colorPath + '/' + 1, 'Search one colors with id equal 1');
        expect(req.request.method).toBe('GET');
        expect(req.cancelled).toBeFalsy();
        expect(req.request.responseType).toEqual('json');
        req.flush(MOCK_COLOR);

        httpMock.verify();
      })
  );

  it('should get all colors',
    inject(
      [HttpTestingController, ColorsService],
      (httpMock: HttpTestingController, colorsService: ColorsService) => {
        const MOCK_COLORS = [
          {
            'id': 1,
            'name': 'red'
          },
          {
            'id': 2,
            'name': 'green'
          },
          {
            'id': 3,
            'name': 'blue'
          },
          {
            'id': 4,
            'name': 'violet'
          },
          {
            'id': 5,
            'name': 'yellow'
          },
          {
            'id': 6,
            'name': 'brown'
          },
          {
            'id': 7,
            'name': 'beige'
          },
          {
            'id': 8,
            'name': 'white'
          },
          {
            'id': 9,
            'name': 'black'
          }
        ];

        colorsService.getAllColors()
          .subscribe( (event: HttpEvent<any>) => {
            switch (event.type) {
              case HttpEventType.Response:
                expect(event.body).toEqual(MOCK_COLORS);
            }
          });

        const req = httpMock.expectOne(colorsService.colorPath);

        expect(req.cancelled).toBeFalsy();
        expect(req.request.responseType).toEqual('json');

        req.flush(MOCK_COLORS);
        httpMock.verify();
    })
  );
});
