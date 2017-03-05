import { Component, OnInit } from '@angular/core';
import {USER} from '../user';
import {Http} from '@angular/http';
import {UserService} from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {

  users:USER[]=[];

  constructor(
    private http:Http,
    private userService:UserService
  ) { }

  ngOnInit():void {
  
  }




}
