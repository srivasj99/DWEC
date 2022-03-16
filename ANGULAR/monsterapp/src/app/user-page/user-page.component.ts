import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users:any;
  resources:any;

  constructor(private dataUsers:UserServiceService, private resource:UserServiceService){

  }

  ngOnInit(): void {
    this.dataUsers.getUsers().subscribe(data => {this.users = data});
    this.resource.getResources().subscribe(data => {this.resources = data})
  }

}
