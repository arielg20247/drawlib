import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { Profile } from '../interfaces/profile';
import { ProfileService } from '../services/profile.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<Profile> {
  constructor(
    private profileService: ProfileService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<Profile> {
    if(route.params['id'])
    {
      return this.profileService.getProfile(+route.params['id']).pipe(
        catchError(() => {
          this.router.navigate(['/drawings']);
          return EMPTY;
        })
      );
    }else
    {
      return this.profileService.getMyProfile().pipe(
        catchError(() => {
          this.router.navigate(['/drawings']);
          return EMPTY;
        })
      );
    }

  }
}
