import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-error',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-error.component.html',
  styleUrl: './login-error.component.css'
})
export class LoginErrorComponent {
  loginObj: any = {
    userName: '',
    password: ''
  }

  constructor(private router: Router){}

  onLogin() {
    if (this.loginObj.userName == 'Abhijay' && this.loginObj.password == '1234') {
      this.router.navigateByUrl('/template-home')
    }
    else{
      this.router.navigateByUrl('/login-error')
    }
  }
}


