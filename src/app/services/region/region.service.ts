import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
/**
 * Servicio de Regiones
 */
@Injectable({
  providedIn: 'root'
})
export class RegionService {
  baseUrl = environment.host + environment.apiBaseUrl;
  private headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', this.authService.token!);

  constructor( private http        :HttpClient,
               private authService :AuthService) { }
/**
 * 
 * @returns Todas las regiones
 */
  getRegions(){
    return this.http.get<any>(this.baseUrl+'/region',
      {headers: this.headers});
  }
}
