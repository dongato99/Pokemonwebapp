import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemonid } from '../interface/pokemonid';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getPokemons(index:number){
    return this.http.get<Pokemonid>(this.baseUrl+'/pokemon/'+index);
  }
}
