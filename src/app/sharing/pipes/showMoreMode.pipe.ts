import { Pipe, PipeTransform } from '@angular/core';
import { Book } from 'src/app/interfaces/interfaces';

@Pipe({
  name: 'showMoreMode',
})
export class ShowMoreModePipe implements PipeTransform {
  transform(colection: Book[], shouldShowMore: boolean): Book[] {
    return shouldShowMore ? colection : colection.slice(0, 4)
  }
}
