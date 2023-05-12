import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  redirectToLogin() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        userName: 'Conor',
      },
    };
    this.router.navigate(['/home'], navigationExtras);
  }
}
