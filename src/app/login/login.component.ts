import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {AuthService} from '../auth.service';

import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error : string =""

  loginForm : FormGroup = new FormGroup( {
    
    email : new FormControl( null , [ Validators.required , Validators.email ]  ),
    password : new FormControl( null , [ Validators.required , Validators.pattern("^[a-zA-Z0-9]+$") ]  ),
  
  } )


  constructor(private _AuthService:AuthService , private _Router:Router) { }

  sendLogin( formLogin : FormGroup )
  {
        this._AuthService.loginToBack(formLogin.value  ).subscribe((data)=>{

          if( data.message =="success" )
          {
              localStorage.setItem("myToken" , data.token );
              this._AuthService.savaData()
              this._Router.navigate(['/home'])

          }
          else
          {
              this.error = data.message;
          }



        })


  }

  ngOnInit(): void {
  }

}
