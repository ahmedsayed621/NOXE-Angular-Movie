import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hi'
})
export class HiPipe implements PipeTransform {

  transform( movieName : string  ): string {

    return "hi"+movieName;
  }

}
