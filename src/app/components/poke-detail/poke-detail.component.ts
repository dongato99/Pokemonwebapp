import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationStart } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
/**
 * Componente de los detalles del Pokemon
 */
@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  pokemon: any = '';
  pokemonImg = '';

  constructor(private pokemonService: PokemonService, private activatedRouter: ActivatedRoute) { 

    this.activatedRouter.params.subscribe(
      
        params => {
          this.getPokemon(params['id']);
        
      }
    )

  }

  ngOnInit(): void {
  }
/**
 * Obtener pokemon por id
 * @param id Numero del Pokemon
 */
  getPokemon(id){
    this.pokemonService.getPokemons(id).subscribe(
      res => {
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
      },

      err => {

      }
    );
  }

}
