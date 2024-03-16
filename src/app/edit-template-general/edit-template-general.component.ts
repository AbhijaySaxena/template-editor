import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-template-general',
  standalone: true,
  imports: [],
  templateUrl: './edit-template-general.component.html',
  styleUrl: './edit-template-general.component.css'
})
export class EditTemplateGeneralComponent {

  constructor(private router: Router){}

  closePopup(){
    this.router.navigateByUrl('/template-home')
  }

  openVariable(){
    this.router.navigateByUrl('/edit-template-variable')
  }
}
