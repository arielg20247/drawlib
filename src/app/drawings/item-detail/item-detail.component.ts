import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrawingComment, Drawings } from 'src/app/interfaces/drawings';
import { DrawingsService } from 'src/app/services/drawings.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit{
  constructor( private readonly router: Router,  private readonly route: ActivatedRoute, private readonly drawingsService: DrawingsService  ) { }



  image:Drawings =  this.route.snapshot.data['image'];
  comments:DrawingComment[] =  this.route.snapshot.data['comments'];
  comment:DrawingComment = {
    comment: '',
  };

  commentText = '';

  ngOnInit(): void {
    console.log();
  }

  postComment():void{
    if (this.image.id)
    this.comment.imageId = Number(this.image.id);
    this.comment.comment = this.commentText;
    this.drawingsService.postComment(this.comment).subscribe({
      next: (res) => {
        this.comments.push(res);
        this.commentText = '';
      },
      error: (error) => {
        console.log(error.error.error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.error,
        });
      },
    });
  }

  like():void{
    if (this.image.id)
    this.drawingsService.likeImage(this.image.id).subscribe({
      next: (res) => {
        this.image.isLiked = true;
        if (this.image.numLikes || this.image.numLikes == 0)
        this.image.numLikes = this.image.numLikes + 1;
      },
      error: (error) => {
        console.log(error.error.error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.error,
        });
      },
    });
  }

  unlike():void{
    if (this.image.id)
    this.drawingsService.unlikeImage(this.image.id).subscribe({
      next: (res) => {
        this.image.isLiked = false;
        if (this.image.numLikes)
        this.image.numLikes = this.image.numLikes - 1;
      },
      error: (error) => {
        console.log(error.error.error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.error,
        });
      },
    });
  }
}



