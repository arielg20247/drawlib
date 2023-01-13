import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { AuthData, RegisterData, TokenResponse } from '../interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,

    private readonly router: Router
  ) {}

  loginChange$ = new ReplaySubject<boolean>(1);

  login(authData: AuthData): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`auth/login`, authData);
  }

  register(registerData: RegisterData): Observable<void> {
    return this.http.post<void>(`users`, registerData);
  }

  isLogged(): boolean {
    if (!localStorage.getItem('token')) {
      return false;
    } else {
      this.loginChange$.next(true);
      return true;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loginChange$.next(false);
    this.router.navigate(['/auth/login'])
  }
}
