import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DrawingComment, DrawingCommentPostResponse, DrawingCommentResponse, DrawingResponse, Drawings, DrawingsResponse, newDrawingResponse, Tag, TagResponse } from '../interfaces/drawings';

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
    return this.http.get<DrawingResponse>(`images/` + id).pipe(map((res) => {
      res.image.canEdit = res.canEdit;
      res.image.isLiked = res.isLiked;
      return res.image
    }));
  }

  getImagesByUser(id:number): Observable<Drawings[]> {
    return this.http.get<DrawingsResponse>(`images/user/` + id).pipe(map((res) => res.image));
  }

  postImage(image:Drawings): Observable<Drawings> {
    return this.http.post<newDrawingResponse>(`images`,image).pipe(map((res) => res.newImage));
  }

  editImage(image:Drawings): Observable<void> {
    image.image = undefined;
    return this.http.put<void>(`images/edit/` + image.id,image);
  }

  getTags(): Observable<Tag[]> {
    return this.http.get<TagResponse>(`images/tags`).pipe(map((res) => res.resultTags));
  }

  getComments(id:number): Observable<DrawingComment[]> {
    return this.http.get<DrawingCommentResponse>(`comments/` + id).pipe(map((res) => res.commentData));
  }

  postComment(comment:DrawingComment): Observable<DrawingComment> {
    return this.http.post<DrawingCommentPostResponse>(`comments`,comment).pipe(map((res) => res.commentData));
  }

  deleteImage(image:string): Observable<void> {
    return this.http.delete<void>(`images/delete/` + image );
  }

}
