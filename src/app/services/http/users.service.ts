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

  /**
   * Get on User by id
   * @param id
   */
  public getSingleUser(id): Observable<HttpResponse<Users>> {
    return this.http.get<Users>(this.userPath + '/' + id,
      {
        headers: this.header,
        responseType: 'json',
        reportProgress: true,
        observe: 'response'
      }
    );
  }

  /**
   * Get all Users
   */
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

  /**
   * Get User Access by username and password
   */
  public getUserAccess(username: string, password: string) {}

  /**
   * Get User permission for access at critical page or functionality
   * @Param id
   */
  public getUserPermission(id) {}

  /**
   * Create a new User
   */
  public setUser() {}

  /**
   *  Modify an User
   *  @Param id
   */
  public updateUser(id) {}

}
