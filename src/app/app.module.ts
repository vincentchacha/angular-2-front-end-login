import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule} from    '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import {UserService} from './user.service';
import {routes} from './app-routing';
import {LoggedInGuard} from './auth.guard';


import { AppComponent }         from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,LoginComponent,DashboardComponent
  ],
  providers:[UserService,LoggedInGuard],
 
  bootstrap: [ AppComponent ]
})
export class AppModule { }