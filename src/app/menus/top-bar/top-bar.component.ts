import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  constructor(private readonly authService: AuthService) {}


  loginValue?:boolean;

  ngOnInit(): void {
    this.authService.loginChange$.subscribe((res) => this.loginValue = res);
  }

  logout():void{
    this.authService.logout();
  }
}
