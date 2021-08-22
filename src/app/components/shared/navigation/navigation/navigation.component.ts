import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  // role: string;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    // this.role = localStorage.getItem('role');
  }

  logout() {
    this.authService.logout();
    this.router.navigate([ '/signin' ]);
  }
}
