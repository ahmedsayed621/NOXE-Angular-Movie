import { Component, OnInit } from '@angular/core';

import {MovieService} from '../movie.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviesData : any[] = [];
  tvData : any[] = [];

  searcWord: string =""

  imgPath : string ="https://image.tmdb.org/t/p/w500";

  constructor( public _MovieService :MovieService    ) { 

     _MovieService.getTrending("movie").subscribe( (data)=>{

        this.moviesData = data.results.slice(0,10);


      }   )

      _MovieService.getTrending("tv").subscribe( (data)=>{

        this.tvData = data.results.slice(0,10);


      }   )




  }

  ngOnInit(): void {
  }

}
