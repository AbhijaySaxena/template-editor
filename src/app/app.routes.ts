import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginErrorComponent } from './login-error/login-error.component';
import { TemplateHomeComponent } from './template-home/template-home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'login-error',
        component: LoginErrorComponent
    },
    {
        path: 'template-home',
        component: TemplateHomeComponent
    }
];
