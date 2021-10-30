import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './components/region/region.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { LocationComponent } from './components/location/location.component';
import { BerryComponent } from './components/berry/berry.component';
import { PokeItemComponent } from './components/poke-item/poke-item.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path: 'home', component: PokeTableComponent},
  {path: 'pokeDetail/:id', component: PokeDetailComponent},
  {path: 'regions', component: RegionComponent},
  {path: 'regions/locations/:index', component: LocationComponent},
  {path: 'berries', component: BerryComponent},
  {path: 'items', component: PokeItemComponent},
  {path: 'login', component:LogInComponent},
  {path: '',pathMatch: 'full', redirectTo:'home'},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
