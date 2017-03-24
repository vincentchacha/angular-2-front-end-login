import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs';
import {USERS} from './data';
import {USER} from './user';
//import {SupplierDetailsComponent} from './supplier-details/supplier-details.component';
//import 'rxjs/operator/*';

@Injectable()
export class UserService {
  private loggedIn = false;
  private isAdministrator:boolean=false;
  token :any='';
  data=USERS;
  user:USER;
  


  constructor() {
    //this.loggedIn = !!localStorage.getItem('token');
  }

  login(username, password) {
      if(username=='admin' || password=='admin'){

        this.token='admin';
        }else{
        this.token='user';
        }
       localStorage.setItem('auth',this.token);
       const response='sucess';
  return response;
  }
 getAll(): Promise<USER[]> {
  return Promise.resolve(USERS);
}
getUser(id: string): Promise<USER> {
  return this.getAll()
            .then(users => users.find(user => user.id === id));
}

logout(){

  this.loggedIn=false;
  localStorage.removeItem('auth');
}
  isLoggedIn():boolean{
        if(localStorage.getItem('auth')){
        this.loggedIn=true;
        }
  return this.loggedIn;
  }
  isAdmin():boolean{
      if(localStorage.getItem('auth')=='admin'){
      this.isAdministrator=true;
    
        }
    return this.isAdministrator;

  }
  addUser(user:USER):Promise<void>{
          return Promise.resolve(this.data)
          .then(users=>{users.push(user)});
  }
}