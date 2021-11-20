import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { Pokemonid } from '../../interface/pokemonid';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = environment.host + environment.apiBaseUrl;

  constructor(private http:HttpClient,
              private authService:AuthService) { }

  getPokemons(index:number){
    const headers = new HttpHeaders()
        .set('Content-Type', 'application/json' )
        .set('Authorization', this.authService.token!);
    return this.http.get<Pokemonid>(this.baseUrl+'/pokemon/'+index, {headers});
  }
}
