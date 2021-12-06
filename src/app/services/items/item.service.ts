import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Itemid } from 'src/app/interface/itemid';
import { environment } from 'src/environments/environment';
/**
 * Servicio de items
 */
@Injectable({
  providedIn: 'root'
})
export class ItemService {

private headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', this.authService.token!);
 

  constructor(private http        :HttpClient,
              private authService :AuthService) { }
/**
 * Obtener item por numero
 * @param index Numero de item
 * @returns 
 */
  getItems(index:number){
    return this.http.get<Itemid>(`${environment.host + environment.apiBaseUrl}/item/${index}`,
      {headers: this.headers})
  }
}
