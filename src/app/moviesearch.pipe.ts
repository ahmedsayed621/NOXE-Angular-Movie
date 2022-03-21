import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviesearch'
})
export class MoviesearchPipe implements PipeTransform {

  transform( allMovies:any[] , term : string    ): any[] {
  
    return allMovies.filter(  (movie)=>{

      return movie.title.includes(term)


    }  )





  }

}
