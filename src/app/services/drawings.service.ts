import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DrawingComment, DrawingCommentResponse, DrawingResponse, Drawings, DrawingsResponse, newDrawingResponse, Tag, TagResponse } from '../interfaces/drawings';

@Injectable({
  providedIn: 'root'
})
export class DrawingsService {
  constructor(
    private readonly http: HttpClient,

    private readonly router: Router
  ) {}


  getAllImages():Observable<Drawings[]> {
    return this.http.get<DrawingsResponse>(`images`).pipe(map((res) => res.image));
  }

  getOneImage(id:number): Observable<Drawings> {
    return this.http.get<DrawingResponse>(`images/` + id).pipe(map((res) => res.image));
  }

  getImagesByUser(id:number): Observable<Drawings[]> {
    return this.http.get<DrawingsResponse>(`images/user/` + id).pipe(map((res) => res.image));
  }

  postImage(image:Drawings): Observable<Drawings> {
    return this.http.post<newDrawingResponse>(`images`,image).pipe(map((res) => res.newImage));
  }

  getTags(): Observable<Tag[]> {
    return this.http.get<TagResponse>(`images/tags`).pipe(map((res) => res.resultTags));
  }

  getComments(id:number): Observable<DrawingComment[]> {
    return this.http.get<DrawingCommentResponse>(`comments/` + id).pipe(map((res) => res.commentData));
  }

}
