import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-template-filled',
  standalone: true,
  imports: [],
  templateUrl: './create-template-filled.component.html',
  styleUrl: './create-template-filled.component.css'
})
export class CreateTemplateFilledComponent {

  constructor(private router: Router){}

  createTemplate(){
    this.router.navigateByUrl('/create-template-empty')
  }

  closePopup(){
    this.router.navigateByUrl('/template-home')
  }

  editTemplate() {
    this.router.navigateByUrl('/edit-template-general')
  }
}
