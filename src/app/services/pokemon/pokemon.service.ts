import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable } from 'rxjs';
import { TeamMember } from 'src/app/interface/team-member';
import { environment } from 'src/environments/environment';
import { Pokemonid } from '../../interface/pokemonid';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = environment.host + environment.apiBaseUrl;
  private headers: HttpHeaders;

  constructor(private http: HttpClient,
    private authService: AuthService) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.authService.token!);
  }

  getPokemons(index: number) {
    return this.http.get<Pokemonid>(this.baseUrl + '/pokemon/' + index, { headers: this.headers });
  }

  getMyTeamPokemons() {
    return this.http.get<TeamMember[]>(this.baseUrl + '/my-team', { headers: this.headers });
  }

  addPokemonToMyTeamPokemons(pokemonId:number) {
    return this.http.post<TeamMember>(this.baseUrl + '/my-team', {"pokemonId":pokemonId} , { headers: this.headers });
  }

  removePokemonFromMyTeamPokemons(pokemonId:number) {
    return this.http.delete<TeamMember>(this.baseUrl + '/my-team', { headers: this.headers , body:{"pokemonId":pokemonId}});
  }
}
