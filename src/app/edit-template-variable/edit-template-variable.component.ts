import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-template-variable',
  standalone: true,
  imports: [],
  templateUrl: './edit-template-variable.component.html',
  styleUrl: './edit-template-variable.component.css'
})
export class EditTemplateVariableComponent {

  constructor(private router: Router){}

  closePopup(){
    this.router.navigateByUrl('/template-home')
  }
}
