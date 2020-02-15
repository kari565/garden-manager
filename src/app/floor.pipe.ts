import {Pipe} from '@angular/core';

@Pipe({name: 'floor'})
export class FloorPipe {
  transform (input: number) {
    return Math.floor(input);
  }
}