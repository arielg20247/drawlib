import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { Drawings } from '../interfaces/drawings';
import { DrawingsService } from '../services/drawings.service';

@Injectable({
  providedIn: 'root',
})
export class ImageResolver implements Resolve<Drawings> {
  constructor(
    private drawingsService: DrawingsService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Drawings> {
    {
      return this.drawingsService.getOneImage(+route.params['id']).pipe(
        catchError(() => {
          this.router.navigate(['/drawings']);
          return EMPTY;
        })
      );
    }
  }
}
