import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private _HttpClient:HttpClient     ) { }


  getTrending( mediaType:string ):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=866cd3a065ef9304a549f1d65e494940`)
  }

  getMovieDetails( movieId:any ):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=866cd3a065ef9304a549f1d65e494940&language=en-US`)
  }


}
