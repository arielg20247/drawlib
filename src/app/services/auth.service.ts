import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, ReplaySubject } from 'rxjs';
import { AuthData, RegisterData, TokenResponse } from '../interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,

    private readonly router: Router
  ) {}

  logged = false;
  loginChange$ = new ReplaySubject<boolean>(1);

  login(authData: AuthData): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`auth/login`, authData);
  }

  register(registerData: RegisterData): Observable<void> {
    return this.http.post<void>(`users`, registerData);
  }
}
