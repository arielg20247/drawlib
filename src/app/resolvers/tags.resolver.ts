import { Injectable } from '@angular/core';
import {
  Router, Resolve,
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { Tag } from '../interfaces/drawings';
import { DrawingsService } from '../services/drawings.service';

@Injectable({
  providedIn: 'root'
})
export class TagsResolver implements Resolve<Tag[]> {
  constructor(
    private drawingsService: DrawingsService,
    private router: Router
  ) {}

  resolve(
  ): Observable<Tag[]> {
      return this.drawingsService.getTags().pipe(
        catchError(() => {
          return EMPTY;
        })
      );
  }
}
