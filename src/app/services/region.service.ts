import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getRegions(){
    return this.http.get<any>(this.baseUrl+'/region/');
  }
}
