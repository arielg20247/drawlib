import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Profile, ProfileResponse } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(
    private readonly http: HttpClient,

    private readonly router: Router
  ) {}


  getProfile(id:number): Observable<Profile>{
    return this.http.get<ProfileResponse>(`users/` + id).pipe(map((res) => res.userData));
  }

  getMyProfile(): Observable<Profile> {
    return this.http.get<ProfileResponse>(`users/me`).pipe(map((res) => res.userData));
  }

}
