import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  username : string;
  email : string;
  profileImageUrl : string;

  constructor() { }

  ngOnInit(): void {
    this.username = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
    this.profileImageUrl = localStorage.getItem('profileImageUrl');
  }

}
