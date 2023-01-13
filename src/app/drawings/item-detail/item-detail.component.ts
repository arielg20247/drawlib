import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drawings } from 'src/app/interfaces/drawings';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit{
  constructor( private readonly router: Router,  private readonly route: ActivatedRoute  ) { }



  image:Drawings =  this.route.snapshot.data['image'];

  ngOnInit(): void {

    console.log(this.image);
  }
}



