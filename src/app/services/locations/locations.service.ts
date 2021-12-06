import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
/**
 * Servicio de ubicaciones por region
 */
@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  baseUrl = environment.host + environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
/**
 * Obtener ubicaciones por region
 * @param index Numero de region
 * @returns 
 */
  getLocations(index:number){
    console.log(index);
    return this.http.get<any>(this.baseUrl+'/location/'+index);
  }
}
