import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;

  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService
      .login(this.loginForm.value)
      .subscribe((data) => {
        console.log(data)
        localStorage.setItem('token', data['token']);
        localStorage.setItem('name', data['user']['name']);
        localStorage.setItem('role', data['user']['isAdmin']);
        localStorage.setItem('email', data['user']['email']);
        localStorage.setItem('profileImageUrl', data['user']['profileImageUrl']);
        this.router.navigate([ '/home' ])
      });
  }

}
