import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starMaker',
})
export class StarMakerPipe implements PipeTransform {
  transform(text: string): string {
    const starText: string = text
      .split(' ')
      .map((word, index) => {
        if (index % 2 !== 0) {
          return word
            .split('')
            .map((letter) => letter.replace(/[a-zA-Z]/, '*'))
            .join('');
        } else {
          return word;
        }
      })
      .join(' ');
    return starText;
  }
}
