import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SupplierDetailsComponent} from './supplier-details/supplier-details.component';
import {AddSupplierComponent} from './add-supplier/add-supplier.component';
import {EditSupplierComponent} from './edit-supplier/edit-supplier.component';
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
        path: 'user/:id',
        component: SupplierDetailsComponent,canActivate: [LoggedInGuard]
      },
       {
        path: 'add',
        component: AddSupplierComponent
      },
       {
        path: 'user/edit/:id',
        component: EditSupplierComponent,canActivate: [LoggedInGuard]
      },
       {
        path: 'dashboard',
        component: DashboardComponent,canActivate: [LoggedInGuard]
      }
];