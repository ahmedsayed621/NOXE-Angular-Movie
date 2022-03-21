import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import {Router} from '@angular/router'


import {AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private _AuthService:AuthService , private _Router :Router  )
  {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if( this._AuthService.currentUser.getValue() == null  )
      {
        this._Router.navigate(['/login'])
        return false;
      }
      else
      {
        return true;
      }


  }
  
}
