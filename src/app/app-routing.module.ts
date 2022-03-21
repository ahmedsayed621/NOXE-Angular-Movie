import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { NetworkComponent } from './network/network.component';
import { RegisterComponent } from './register/register.component';
import { TvshowComponent } from './tvshow/tvshow.component';

import {AuthGuard} from './auth.guard'
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [
  {path:"" , redirectTo:"register" , pathMatch :'full'},
  {path : "home" ,  canActivate : [AuthGuard],component:HomeComponent},
  {path : "about",  canActivate : [AuthGuard] , component:AboutComponent},
  {path : "movie",  canActivate : [AuthGuard] , component:MovieComponent},
  {path : "tv" ,  canActivate : [AuthGuard], component:TvshowComponent},
  {path : "network" ,  canActivate : [AuthGuard], component:NetworkComponent},
  {path : "moviedetails/:id" ,  canActivate : [AuthGuard], component:MoviedetailsComponent},
  
  {path : "register" , component:RegisterComponent},
  {path : "login" , component:LoginComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
