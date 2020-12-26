import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { _global } from '../_global';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {
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

  Login(modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    
    return this.http.post<any>(this.url + 'usuario/login', JSON.stringify(modelo), httpOptions).pipe();
  } 

  usuarioId(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.get(this.url + 'usuario/' + id, httpOptions).pipe(map(this.extractData));
  }

}
