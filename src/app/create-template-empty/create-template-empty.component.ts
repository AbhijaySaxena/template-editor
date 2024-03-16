import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-template-empty',
  standalone: true,
  imports: [],
  templateUrl: './create-template-empty.component.html',
  styleUrl: './create-template-empty.component.css'
})
export class CreateTemplateEmptyComponent {

  constructor(private router: Router){}

  addFiles(){
    this.router.navigateByUrl('/create-template-filled')
  }

  editTemplate(){
    this.router.navigateByUrl('/edit-template-general')
  }

  closePopup(){
    this.router.navigateByUrl('/template-home')
  }
}
