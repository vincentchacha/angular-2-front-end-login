import { Component } from '@angular/core';
import {Http} from '@angular/http';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
moduleId:module.id,
  selector: 'my-login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent {

  
  
constructor(private http:Http,private router:Router,private userService:UserService){
}

login(username,password) {
   this.userService.login(username, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['/dashboard']);
     }
    });
  }
  
}