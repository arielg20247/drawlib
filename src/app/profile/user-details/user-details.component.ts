import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  constructor( private readonly router: Router,  private readonly route: ActivatedRoute  ) { }


  userData:Profile =  this.route.snapshot.data['profile'];

  ngOnInit(): void {

    console.log(this.userData);
  }
}
