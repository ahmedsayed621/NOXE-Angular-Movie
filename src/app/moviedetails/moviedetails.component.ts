import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {MovieService} from '../movie.service'

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

movieId : any = "";

movieSEtailsVar :any;

  constructor(private _ActivatedRoute:ActivatedRoute , private _MovieService:MovieService) {

    this.movieId =  _ActivatedRoute.snapshot.paramMap.get("id")// id--> url

    this._MovieService.getMovieDetails(this.movieId).subscribe((data)=>{

  this.movieSEtailsVar = data;


    })



   }

  ngOnInit(): void {
  }

}
