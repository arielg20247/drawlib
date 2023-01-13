import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterData } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  registerData!: RegisterData;

  ngOnInit(): void {
    this.resetRegisterData();
  }

  resetRegisterData(): void {
    this.registerData = {
      email: '',
      password: '',
      name: '',
    };
  }

  register(): void {
    this.authService.register(this.registerData).subscribe({
      next: () => {
        Swal.fire('Te has registrado correctamente', '', 'success').then(() =>
          this.router.navigate(['/auth/login'])
        );
      },
      error: (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.error,
        });
      },
    });
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) return;
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.registerData.picture = reader.result as string;
    });
  }
}
