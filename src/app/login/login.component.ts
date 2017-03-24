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
  response:string='';

  
  
constructor(private router:Router,private userService:UserService){
}

login(username,password) {
   this.response=this.userService.login(username, password);
   if(this.response=='sucess'){
        console.log('sucessfuly logged in as admin');
        this.router.navigate(['/dashboard']);
    }else{
       this.router.navigate(['/']);
    }
  }
  
}