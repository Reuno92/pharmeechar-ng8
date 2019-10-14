import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Colors} from '../../models/Colors';
import { API } from '../../constant/API';
import { HttpHeaders } from '@angular/common/http';

const API_PATH: API = new API();
const headers: HttpHeaders = new HttpHeaders();


@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  colorPath = API_PATH.HOST + API_PATH.PORT + API_PATH.COLORS;

  constructor(private http: HttpClient) {}

  getColors(): Observable<HttpResponse<Colors[]>> {
    return this.http.get<Colors[]>(this.colorPath, { headers, responseType: 'json', reportProgress: true, observe: 'response' });
  }

  getAnColor(id): Observable<HttpResponse<Colors>> {
    return this.http.get<Colors>(this.colorPath + '/' + id, { headers, responseType: 'json', reportProgress: true, observe: 'response' });
  }
}
