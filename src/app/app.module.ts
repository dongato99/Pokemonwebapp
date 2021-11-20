import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/shared/material.module';
import { RegionComponent } from './components/region/region.component';
import { LocationComponent } from './components/location/location.component';
import { BerryComponent } from './components/berry/berry.component';
import { PokeItemComponent } from './components/poke-item/poke-item.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PokeDetailComponent,
    PokeTableComponent,
    RegionComponent,
    LocationComponent,
    BerryComponent,
    PokeItemComponent,
    LogInComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
