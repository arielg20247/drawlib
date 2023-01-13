import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Drawings, DrawingsResponse } from '../interfaces/drawings';

@Injectable({
  providedIn: 'root'
})
export class DrawingsService {
  constructor(
    private readonly http: HttpClient,

    private readonly router: Router
  ) {}


  getAllImages(): Observable<DrawingsResponse> {
    return this.http.get<DrawingsResponse>(`images`);
  }

}
