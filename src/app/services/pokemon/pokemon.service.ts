import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable } from 'rxjs';
import { TeamMember } from 'src/app/interface/team-member';
import { environment } from 'src/environments/environment';
import { Pokemonid } from '../../interface/pokemonid';
/**
 * Servicio de Pokemon
 */
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
/**
 * Obtener pokemon por numero
 * @param index Numero de pokemon
 * @returns 
 */
  getPokemons(index: number) {
    return this.http.get<Pokemonid>(this.baseUrl + '/pokemon/' + index, { headers: this.headers });
  }
/**
 * 
 * @returns Pokemon dentro del equipo
 */
  getMyTeamPokemons() {
    return this.http.get<TeamMember[]>(this.baseUrl + '/my-team', { headers: this.headers });
  }
/**
 * Añadir pokemon al equipo
 * @param pokemonId Pokemon que se añade
 * @returns 
 */
  addPokemonToMyTeamPokemons(pokemonId:number) {
    return this.http.post<TeamMember>(this.baseUrl + '/my-team', {"pokemonId":pokemonId} , { headers: this.headers });
  }
/**
 * Eliminar un pokemon del equipo
 * @param pokemonId Pokemon que se elimina
 * @returns 
 */
  removePokemonFromMyTeamPokemons(pokemonId:number) {
    return this.http.delete<TeamMember>(this.baseUrl + '/my-team', { headers: this.headers , body:{"pokemonId":pokemonId}});
  }
/**
 * 
 * @returns Saber si se ha alcanzado el maximo de pokemon en el equipo
 */
  isThereSpace(){
    let result:boolean;
    let otherResult:boolean;
    this.getMyTeamPokemons().subscribe(
      (response) => {
        result = response.length <= 5;
        console.log(result)
      },(error)=>{
        console.log(error);
      },()=>{
        if(result)
          otherResult = true
        else 
          otherResult = false
      }
    );
    console.log(result!);
    
    return otherResult!;
  }
}
