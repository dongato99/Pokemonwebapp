import { Component, OnInit } from '@angular/core';
import { Pokemonid } from '../../interface/pokemonid';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  pokemonTeamMembers: Pokemonid[];

  constructor(private pokemonService: PokemonService) { 
    this.pokemonTeamMembers = [];
  }

  ngOnInit(): void {
    this.getMyTeam();
  }

  removeFromTeam(id: number) {
    this.pokemonService.removePokemonFromMyTeamPokemons(id).subscribe(
      (response) => {
        document.querySelector(`#card-id-${id}`)?.remove();
        alert(`Se eliminó el pokemon del equipo.`)
      }, (error) => {
        alert('Algo salió mal: ' + error.status)
      }
    )
  }

  getMyTeam() {
    this.pokemonService.getMyTeamPokemons().subscribe(
      (response) => {
        response.forEach((value) => {
          this.getPokemon(value.pokemonId).subscribe(response => {
            this.pokemonTeamMembers.push(response)
          }, error => {
            console.log(error);
          });
        })
      }
    );
  }

  getPokemon(id:number) {
    return this.pokemonService.getPokemons(id);
  }
}
