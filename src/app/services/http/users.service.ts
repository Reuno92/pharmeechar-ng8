import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {API} from '../../constant/API';
import {Observable} from 'rxjs';
import {Users} from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiPath: API = new API();
  private header: HttpHeaders = new HttpHeaders();

  public userPath = this.apiPath.HOST + this.apiPath.PORT + this.apiPath.USERS;

  constructor(private http: HttpClient) {}

  public getSingleUser(id): Observable<HttpResponse<Users>> {
    console.log(this.userPath + '/' + id);
    return this.http.get<Users>(this.userPath + '/' + id,
      {
        headers: this.header,
        responseType: 'json',
        reportProgress: true,
        observe: 'response'
      }
    );
  }

  public getAllUsers(): Observable<HttpResponse<Users>> {
    return this.http.get<Users>( this.userPath,
      {
        headers: this.header,
        responseType: 'json',
        reportProgress: true,
        observe: 'response'
      }
    );
  }

  public getUserAccess() {}

  public getUserPermission() {}

  public setUser() {}

  public updateUser() {}

  public deleteUser() {}

}
