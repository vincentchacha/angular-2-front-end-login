import { Component, OnInit,Input } from '@angular/core';
import {USER} from '../user';
import {UserService} from '../user.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {USERS} from '../data';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {

  @Input() user: USER;
 private isAdmin:boolean=false;
  constructor(
    private service:UserService,
    private route: ActivatedRoute,
  private location: Location
  ) { }

  ngOnInit() {
       this.route.params
    .switchMap((params: Params) => this.service.getUser(params['id']))
    .subscribe(user => this.user = user);

  }

}
