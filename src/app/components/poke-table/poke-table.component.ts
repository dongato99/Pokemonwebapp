import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { Pokemonid } from 'src/app/interface/pokemonid';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { MyTeamComponent } from '../my-team/my-team.component';



@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css']
})
export class PokeTableComponent implements OnInit {


  displayedColumns: string[] = ['position', 'image', 'name', 'action'];
  data: Pokemonid[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  pokemons = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  table!: Pokemonid;
  pokemonTeamMembers: Pokemonid[];

  constructor(private pokeService: PokemonService,
    private router: Router,
    /* private myTeam: MyTeamComponent */) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    let pokemonData;
    for (let i = 1; i <= 151; i++) {
      this.pokeService.getPokemons(i).subscribe(
        res => {
          pokemonData = {
            position: res.id,
            image: res.sprites.front_default,
            name: res.name
          };
          this.data.push(pokemonData);
          this.dataSource = new MatTableDataSource<Pokemonid>(this.data);
          this.dataSource.paginator = this.paginator;
        },
        err => {
          console.log(err);
        }
      );
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRow(id: number) {
    this.router.navigateByUrl(`pokeDetail/${id}`);
  }

  addPokemonToTeam(id: number) {
    this.pokeService.getMyTeamPokemons().subscribe(
      (response) => {
        if (response.length >= 6) {
          alert('No hay espacio para otro integrante en tu equipo.');
          return;
        } else {
          this.pokeService.addPokemonToMyTeamPokemons(id).subscribe(
            (response) => {
              alert('El resultado: ' + response.userId + ', ' + response.pokemonId + ';')
            }, (error) => {
              if (error.status == 409) {
                alert('El pokemon ya pertenece a tu equipo')
              }
            }
          )
        }
      }
    )
  }
}
