import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
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

  @ViewChild('registerForm') registerForm!: NgForm;

  registerData!: RegisterData;
  password2 = '';

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

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
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
