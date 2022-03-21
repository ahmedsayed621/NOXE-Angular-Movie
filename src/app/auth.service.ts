import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable , BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';

import {Router} from '@angular/router'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // currentUser : any = null;

  currentUser = new BehaviorSubject(null)

  constructor(private _HttpClient:HttpClient  , private _Router:Router) { 

    if(  localStorage.getItem("myToken") == null )
    {
      this._Router.navigate(['/register']);
    }
    else
    {
      this.savaData();
      this._Router.navigate(['/home']);
    }




  }

  registerToBack(registerForm : any):Observable<any>
  {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup" , registerForm )
  }

  loginToBack(loginForm : any):Observable<any>
  {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin" , loginForm )
  }

  savaData()
  {
   // decode ll token
    let token:any = localStorage.getItem("myToken");
     // globa 3la kol el components
    // this.currentUser =  jwtDecode(token);

    this.currentUser.next( jwtDecode(token)  )

  }

  logoutSe()
  {
    localStorage.removeItem("myToken");
    this.currentUser.next(null);
    this._Router.navigate(['/login']);

  }



}
