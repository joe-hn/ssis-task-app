import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { _global } from '../_global';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuarioService {
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

    return this.http.get(this.url + 'usuario/', httpOptions).pipe(map(this.extractData));
  }

  GetSupervisor(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.get(this.url + 'usuario/supervisor/' + id, httpOptions).pipe(map(this.extractData));
  }

  GetOficial(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.get(this.url + 'usuario/oficial/' + id, httpOptions).pipe(map(this.extractData));
  }

  GetId(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.get(this.url + 'usuario/' + id, httpOptions).pipe(map(this.extractData));
  }

  Post(modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.post<any>(this.url + 'usuario', JSON.stringify(modelo), httpOptions).pipe();
  }

  Patch(id, modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.patch(this.url + 'usuario/' + id, JSON.stringify(modelo), httpOptions).pipe();
  }

  CambioEstado(id, modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.patch(this.url + 'usuario/cambioestado/' + id, JSON.stringify(modelo), httpOptions).pipe();
  }

  CambioPass(id, modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.patch(this.url + 'usuario/cambiopass/' + id, JSON.stringify(modelo), httpOptions).pipe();
  }

  Delete(id, usr): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.delete(this.url + 'usuario/' + id + "/" + usr, httpOptions).pipe();
  }

}
