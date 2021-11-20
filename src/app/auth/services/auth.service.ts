import { Injectable } from '@angular/core'; import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';


import { User } from '../interfaces/user';
import { AuthResponse } from '../interfaces/authResponse';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authBaseUrl: string = environment.host + environment.apiAuthUrl;
  private _usuario!: User;

  get usuario() {
    return { ...this._usuario };
  }
  constructor(private http: HttpClient,
    private router: Router) { }

  login(username: string, password: string) {

    const url = `${this.authBaseUrl}/login`;
    const body = { username, password };
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    let testValue = this.http.post<AuthResponse>(url, body, { headers })
      .pipe(
        tap(resp => {
          localStorage.setItem('token', `Bearer ${resp.token!}`);
          console.log('El token es: ' + localStorage.getItem('token'));
        }),
        // catchError( err => of(err.error.msg) )
      );
    return testValue;
  }

  logout() {
    const url = `${this.authBaseUrl}/logout`;
    const headers = new HttpHeaders()
      .set('Authorization', this.token!);
    localStorage.clear();
    let testValue = this.http.post(url, undefined, { headers })
      .pipe(
        tap(
          resp=>{
            console.log(resp);
          }
        )
      )
    return testValue;
  }

  get token() {
    return localStorage.getItem('token')
  }

  isAuthenticated() {
    if (localStorage.getItem('token') != null)
      return true;
    return false
  }
  /*registro( name: string, email: string, password: string ) {

    const url  = `${ this.authBaseUrl }/register`;
    const body = { email, password, name };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( ({ ok, token }) => {
          if ( ok ) {
            localStorage.setItem('token', token! );
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      );

  }*/

  /*validarToken(): Observable<boolean> {

    const url = `${ this.authBaseUrl }/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' );

    return this.http.get<AuthResponse>( url, { headers } )
        .pipe(
          map( resp => {
            localStorage.setItem('token', resp.token! );
            this._usuario = {
              name: resp.name!,
              uid: resp.uid!,
              email: resp.email!
            }

            return resp.ok;
          }),
          catchError( err => of(false) )
        );

  }*/
}
