import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DrawingResponse, Drawings, DrawingsResponse } from '../interfaces/drawings';

@Injectable({
  providedIn: 'root'
})
export class DrawingsService {
  constructor(
    private readonly http: HttpClient,

    private readonly router: Router
  ) {}


  getAllImages():Observable<Drawings[]> {
    return this.http.get<DrawingsResponse>(`images`).pipe(map((res) => res.image));;
  }

  getOneImage(id:number): Observable<Drawings> {
    return this.http.get<DrawingResponse>(`images/` + id).pipe(map((res) => res.image));
  }

  getImagesByUser(id:number): Observable<Drawings[]> {
    return this.http.get<DrawingsResponse>(`images/user/` + id).pipe(map((res) => res.image));
  }

}
