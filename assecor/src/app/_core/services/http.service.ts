import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { share } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get(url: string, params?: HttpParams): Observable<any> {
    return this.http.get(url, { params }).pipe(share());
  }

  public post(url: string, body: any, params?: HttpParams): Observable<any> {
    return this.http.post(url, body, { params }).pipe(share());
  }

  public put(url: string, body: any, params?: HttpParams): Observable<any> {
    return this.http.put(url, body, { params }).pipe(share());
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(url).pipe(share());
  }
}
