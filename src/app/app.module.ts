import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent }  from './components/about/about.component';
import { ArtistComponent }  from './components/artist/artist.component';

import { AppRoutes } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, AppRoutes, FormsModule, HttpModule ],
  declarations: [ AppComponent, NavbarComponent, SearchComponent, AboutComponent, ArtistComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
