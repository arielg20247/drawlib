import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drawings } from 'src/app/interfaces/drawings';
import { DrawingsService } from 'src/app/services/drawings.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  constructor(
    private readonly drawingsService: DrawingsService,
    private readonly router: Router
  ) {}


  imagesData?:Drawings[];


  ngOnInit(): void {
    this.drawingsService.getAllImages().subscribe((res) => {
      this.imagesData = res.image;
      console.log(res);
    });
  }

}
