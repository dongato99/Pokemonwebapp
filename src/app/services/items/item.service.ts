import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itemid } from 'src/app/interface/itemid';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  getItems(index:number){
    return this.http.get<Itemid>(`${environment.baseUrl}/item/${index}`)
  }
}
