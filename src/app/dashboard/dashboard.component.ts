import { Component, OnInit } from '@angular/core';
import {USER} from '../user';
import {Http} from '@angular/http';
import {UserService} from '../user.service';
import {USERS} from '../data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {
  private isAdmin:boolean=true;

 users:USER[]=[];

  constructor(private router:Router,private userService:UserService) {
    const authitem=localStorage.getItem('auth');
    if(authitem=='admin'){
      this.isAdmin=true;
    }else{
      this.isAdmin=false;
    }

   }

  ngOnInit():void{

this.userService.getAll()
  .then(users => this.users = users);
}
 
  logout(){
    this.userService.logout();
    this.router.navigate(['/']);
  }




}
