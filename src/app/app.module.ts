import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'

import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { NetworkComponent } from './network/network.component';
import { NavbarComponent } from './navbar/navbar.component';
import { from } from 'rxjs';
import { HiPipe } from './hi.pipe';
import { MoviesearchPipe } from './moviesearch.pipe';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MovieComponent,
    TvshowComponent,
    NetworkComponent,
    NavbarComponent,
    HiPipe,
    MoviesearchPipe,
    RegisterComponent,
    LoginComponent,
    MoviedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
