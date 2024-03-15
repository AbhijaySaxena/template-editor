import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
