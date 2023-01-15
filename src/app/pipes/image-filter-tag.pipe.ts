import { Pipe, PipeTransform } from '@angular/core';
import { Drawings } from '../interfaces/drawings';

@Pipe({
  name: 'imageFilterTag',
})
export class ImageFilterTagPipe implements PipeTransform {
  transform(events: Drawings[], filterBy: number): Drawings[] {

    console.log(filterBy);
    console.log("jola");
    if (!filterBy) return events;

    return events.filter((ev) => ev.tagId == filterBy);
  }
}
