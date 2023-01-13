import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthData } from 'src/app/interfaces/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  authData!: AuthData;

  ngOnInit(): void {
    this.resetAuthData();
  }

  resetAuthData(): void {
    this.authData = {
      email: '',
      password: '',
    };
  }

  login(): void {
    this.authService.login(this.authData).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.authService.loginChange$.next(true);
        Swal.fire('Te has logeado correctamente', '', 'success').then(() => this.router.navigate(['/']));
      },
      error: (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message,
        });
      },
    });
  }


}
