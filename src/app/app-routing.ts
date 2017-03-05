import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoggedInGuard} from './auth.guard';

export const routes = [
  {
        path: '',
        component: LoginComponent
      },
       {
        path: 'login',
        component: LoginComponent
      },
       {
        path: 'dashboard',
        component: DashboardComponent,canActivate: [LoggedInGuard]
      }
];