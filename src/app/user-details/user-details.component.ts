import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {Router} from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users: User[];
  user: User = new User(1, 'yeshendra', 29, 'Chinhat Lucknow', 'India', 'Lucknow');
  anotherUser: User = new User();

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

  getUsers() {
    console.log('In here');
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  createUser() {
    this.userService.createUser(this.user).subscribe(data => {
      alert('User created successfully');
    });
  }

  demoUser() {
    console.log('In this demo service');
    this.userService.createDemoUser().subscribe(data => {
      this.anotherUser = data;
      console.log(this.anotherUser);
    });
  }

}
