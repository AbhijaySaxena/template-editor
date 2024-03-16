import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-home',
  standalone: true,
  imports: [],
  templateUrl: './template-home.component.html',
  styleUrl: './template-home.component.css'
})
export class TemplateHomeComponent {

  constructor(private router: Router){}

  onCreateTemplate() {
    this.router.navigateByUrl('/create-template-empty')
  }
}
