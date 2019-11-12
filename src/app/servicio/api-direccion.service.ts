import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { _global } from '../_global';
 
@Injectable({
  providedIn: 'root'
})
export class ApiDireccionService {
  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = _global.url;
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  Get(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.get(this.url + 'direccion', httpOptions).pipe(map(this.extractData));
  }

  GetId(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.get(this.url + 'direccion/' + id, httpOptions).pipe(map(this.extractData));
  }

  GetTipoDireccionId(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.get(this.url + 'direccion/tipodireccion/' + id, httpOptions).pipe(map(this.extractData));
  }

  Post(modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.post<any>(this.url + 'direccion', JSON.stringify(modelo), httpOptions).pipe();
  }

  Patch(id, modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.patch(this.url + 'direccion/' + id, JSON.stringify(modelo), httpOptions).pipe();
  }

  Delete(id, usr): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.delete(this.url + 'direccion/' + id + "/" + usr, httpOptions).pipe();
  }
  
}
