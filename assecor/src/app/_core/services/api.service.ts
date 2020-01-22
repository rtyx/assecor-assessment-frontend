import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './http.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: string = environment.api;

  constructor(private httpService: HttpService) {
  }

  public get(endpoint: string, params?: HttpParams): Observable<any> {
    return this.httpService.get(`${this.api}/${endpoint}`, params);
  }

  public post(endpoint: string, body?: any): Observable<any> {
    return this.httpService.post(`${this.api}/${endpoint}`, body);
  }

  public put(endpoint: string, body?: any): Observable<any> {
    return this.httpService.put(`${this.api}/${endpoint}`, body);
  }

  public delete(endpoint: string, item?: any): Observable<any> {
    return this.httpService.delete(`${this.api}/${endpoint}/${item}`);
  }

}
