import { Component, OnInit,Input } from '@angular/core';
import {USER} from '../user';
import {UserService} from '../user.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {USERS} from '../data';
import { ActivatedRoute}   from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  constructor(
    private service:UserService,
    private route: ActivatedRoute,
  private location: Location
  ) { }

  ngOnInit() {
  }

}
