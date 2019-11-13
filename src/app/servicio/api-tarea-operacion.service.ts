import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { _global } from '../_global';

@Injectable({
  providedIn: 'root'
})
export class ApiTareaOperacionService {
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

    return this.http.get(this.url + 'tareaoperacion', httpOptions).pipe(map(this.extractData));
  }

  GetId(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.get(this.url + 'tareaoperacion/' + id, httpOptions).pipe(map(this.extractData));
  }

  GetTareaResponsable(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.get(this.url + 'tareaoperacion/getTareaResponsable/' + id, httpOptions).pipe(map(this.extractData));
  }

  GetTareaDireccion(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.get(this.url + 'tareaoperacion/getTareaDireccion/' + id, httpOptions).pipe(map(this.extractData));
  }

  GetMaxCount(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.get(this.url + 'tareaoperacion/maxc/' + id, httpOptions).pipe(map(this.extractData));
  }

  Post(modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.post<any>(this.url + 'tareaoperacion', JSON.stringify(modelo), httpOptions).pipe();
  }

  PostTareaEntrega(modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.post<any>(this.url + 'tareaoperacion/tareaentrega', JSON.stringify(modelo), httpOptions).pipe();
  }

  Patch(id, modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.patch(this.url + 'tareaoperacion/' + id, JSON.stringify(modelo), httpOptions).pipe();
  }

  Ejecucion(id, modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.patch(this.url + 'tareaoperacion/ejecucion/' + id, JSON.stringify(modelo), httpOptions).pipe();
  }

  Completada(id, modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.patch(this.url + 'tareaoperacion/completada/' + id, JSON.stringify(modelo), httpOptions).pipe();
  }

  cancelada(id, modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.patch(this.url + 'tareaoperacion/cancelada/' + id, JSON.stringify(modelo), httpOptions).pipe();
  }

  replanificada(id, modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.patch(this.url + 'tareaoperacion/replanificar/' + id, JSON.stringify(modelo), httpOptions).pipe();
  }

  Delete(id, usr): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('_tk')
      })
    };

    return this.http.delete(this.url + 'tareaoperacion/' + id + "/" + usr, httpOptions).pipe();
  }

}
