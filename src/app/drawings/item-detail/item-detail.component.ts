import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrawingComment, Drawings } from 'src/app/interfaces/drawings';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit{
  constructor( private readonly router: Router,  private readonly route: ActivatedRoute  ) { }



  image:Drawings =  this.route.snapshot.data['image'];
  comments:DrawingComment[] =  this.route.snapshot.data['comments'];

  ngOnInit(): void {

    console.log(this.image);
    console.log(this.comments);
  }
}



