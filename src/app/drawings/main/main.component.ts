import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Drawings } from 'src/app/interfaces/drawings';
import { Profile } from 'src/app/interfaces/profile';
import { DrawingsService } from 'src/app/services/drawings.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(
    private readonly drawingsService: DrawingsService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly profileService: ProfileService
  ) {}

  user?: Profile;
  imagesData: Drawings[] = this.route.snapshot.data['image'];

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.profileService
        .getProfile(params['id'])
        .subscribe((res) => (this.user = res));
      }
    });
  }
}
