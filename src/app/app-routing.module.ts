import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './components/region/region.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { LocationComponent } from './components/location/location.component';
import { BerryComponent } from './components/berry/berry.component';

const routes: Routes = [
  {path: 'home', component: PokeTableComponent},
  {path: 'pokeDetail/:id', component: PokeDetailComponent},
  {path: 'regions', component: RegionComponent},
  {path: 'regions/locations/:index', component: LocationComponent},
  {path: 'berries', component: BerryComponent},
  {path: '',pathMatch: 'full', redirectTo:'home'},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
