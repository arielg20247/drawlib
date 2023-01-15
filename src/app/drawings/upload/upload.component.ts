import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Drawings, Tag } from 'src/app/interfaces/drawings';
import { DrawingsService } from 'src/app/services/drawings.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit{

  constructor(
    private readonly router: Router,
    private readonly drawingsService: DrawingsService,
    private readonly route: ActivatedRoute
  ) {

  }

  @ViewChild('eventForm') eventForm!: NgForm;


  newImage!:Drawings;
  imageName!:string;
  tags:Tag[] =  this.route.snapshot.data['tags'];
  editing = false;



  ngOnInit(): void {

    if(this.route.snapshot.data['image']){
      this.newImage = this.route.snapshot.data['image'];
      this.editing = true;
    }
    else{
      this.newImage = {
        title: '',
        comment: '',
        userId:0,
      }
    }
  }

  addEvent(){
    if(!this.editing){
      this.drawingsService.postImage(this.newImage).subscribe({
        next: (res) => {
          Swal.fire('Imágen subida correctamente', '', 'success').then(() =>
            this.router.navigate(['/drawings/' + res.id])
          );
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.error,
          });
        },
      });
    }
    else{
      this.drawingsService.editImage(this.newImage).subscribe({
        next: (res) => {
          Swal.fire('Imágen editada correctamente', '', 'success').then(() =>
            this.router.navigate(['/drawings/' + this.newImage.id])
          );
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

  delete(){
    if (this.newImage.id)
    {
      this.drawingsService.deleteImage(this.newImage.id).subscribe({
        next: () => {
          Swal.fire('Imágen borrada correctamente', '', 'success').then(() =>
            this.router.navigate(['/drawings/'])
          );
        },
        error: (error) => {
          console.log(error.error.error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha podido borrar la imágen',
          });
        },
      });
    }
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) return;
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newImage.image = reader.result as string;
    });
  }
}
