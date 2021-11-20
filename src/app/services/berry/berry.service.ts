import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BerryService {
  baseUrl = environment.host + environment.apiBaseUrl;
  private headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', this.authService.token!);

  constructor( private http        :HttpClient,
               private authService :AuthService) { }

  getBerries(){
    return this.http.get<any>(this.baseUrl+'/berry?limit=64',
    {headers: this.headers});
  }
}
