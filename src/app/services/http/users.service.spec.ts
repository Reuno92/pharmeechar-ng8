import {inject, TestBed} from '@angular/core/testing';

import { UsersService } from './users.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpEvent, HttpEventType} from '@angular/common/http';


describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [UsersService]
      })
    );

  it('should return an httpResponse for display an user', inject(
    [HttpTestingController, UsersService],
    (httpMock: HttpTestingController, usersService: UsersService) => {
      const mockUser = {
        "id": 1,
        "username": "test",
        "password": "test",
        "role": "staff",
        "permission": "admin",
        "type": "admin",
        "firstname": "tester",
        "lastname": "tester",
        "address": "10, rue de Quimwapoix",
        "zipcode": "59000",
        "city": "Lille"
      };

      usersService.getSingleUser(1)
        .subscribe( (event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toBe(mockUser);
          }
        });

      const req = httpMock.expectOne(usersService.userPath + '/' + 1 , 'Search an user by username');

      expect(req.request.method).toBe('GET');
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toBe('json');

      req.flush(mockUser);

      httpMock.verify();
    }
  ));

  it('should return an httpResponse of all users',
    inject(
      [HttpTestingController, UsersService],
      (httpMock: HttpTestingController, usersService: UsersService) => {
        const mockUsers = [
          {
            "id": 1,
            "username": "test",
            "password": "test",
            "role": "staff",
            "permission": "admin",
            "type": "admin",
            "firstname": "tester",
            "lastname": "tester",
            "address": "10, rue de Quimwapoix",
            "zipcode": "59000",
            "city": "Lille"
          },
          {
            "id": 2,
            "username": "adurand",
            "password": "opidfgl",
            "role": "customer",
            "permission": "none",
            "type": "customer",
            "firstname": "Alexandre",
            "lastname": "Durand",
            "address": "10, rue de perreire",
            "zipcode": "33000",
            "city": "Bordeaux"
          },
          {
            "id": 3,
            "username": "mGerard",
            "password": "opdljf",
            "role": "customer",
            "permission": "none",
            "type": "customer",
            "firstname": "Madelaine",
            "lastname": "Gérard",
            "address": "52, rue de rennes",
            "zipcode": "75006",
            "city": "Paris"
          }
        ];

        usersService.getAllUsers()
          .subscribe( (event: HttpEvent<any>) => {
            switch (event.type) {
              case HttpEventType.Response:
                expect(event.body).toBe(mockUsers);
            }
          });

        const req = httpMock.expectOne(
          usersService.userPath,
          'Search all users'
        );

        expect(req.request.method).toBe('GET');
        expect(req.cancelled).toBeFalsy();
        expect(req.request.responseType).toBe('json');

        req.flush(mockUsers);

        httpMock.verify();
    })
  );
});
