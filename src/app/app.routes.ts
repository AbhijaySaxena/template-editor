import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginErrorComponent } from './login-error/login-error.component';
import { TemplateHomeComponent } from './template-home/template-home.component';
import { CreateTemplateEmptyComponent } from './create-template-empty/create-template-empty.component';
import { CreateTemplateFilledComponent } from './create-template-filled/create-template-filled.component';
import { EditTemplateGeneralComponent } from './edit-template-general/edit-template-general.component';
import { EditTemplateVariableComponent } from './edit-template-variable/edit-template-variable.component';

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
    },
    {
        path: 'create-template-empty',
        component: CreateTemplateEmptyComponent
    },
    {
        path: 'create-template-filled',
        component: CreateTemplateFilledComponent
    },
    {
        path: 'edit-template-general',
        component: EditTemplateGeneralComponent
    },
    {
        path: 'edit-template-variable',
        component: EditTemplateVariableComponent
    }
];
