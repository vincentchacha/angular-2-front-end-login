import { Component, OnInit,Input,Output } from '@angular/core';
import {USER} from '../user';
import {UserService} from '../user.service';
import {USERS} from '../data';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {
 @Input() user: USER;
// private isAdmin:boolean=false;
  constructor(
    private service:UserService,
    private route: ActivatedRoute,
  private location: Location
  ) { }

  ngOnInit():void {

     this.route.params
    .switchMap((params: Params) => this.service.getUser(params['id']))
    .subscribe(user => this.user = user);
  }
 back(){
this.location.back();

  }

}
