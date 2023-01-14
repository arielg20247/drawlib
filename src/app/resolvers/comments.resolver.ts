import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { DrawingComment } from '../interfaces/drawings';
import { DrawingsService } from '../services/drawings.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<DrawingComment[]> {
  constructor(
    private drawingsService: DrawingsService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<DrawingComment[]> {
    {
      return this.drawingsService.getComments(+route.params['id']).pipe(
        catchError(() => {
          return EMPTY;
        })
      );
    }
  }
}

