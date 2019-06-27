import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMode = false;
  successMode = false;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login(email: HTMLInputElement, password: HTMLInputElement) {
    $('#login-btn').attr('disabled', true);
    $('#login-btn').html('<i class=\'fas fa-spinner fa-spin\'></i> Login');
    this.authService.login(email.value, password.value).then((data: object) => {
      if (data['state']) {
        this.successMode = true;
        this.errorMode = false;
        setTimeout(() => {
          this.router.navigateByUrl('/collaborate');
        }, 1000);
      } else {
        $('#login-btn').removeAttr('disabled', false);
        $('#login-btn').html('<i class=\'fas fa-sign-in-alt\'></i> Login');
        this.errorMode = true;
        this.successMode = false;
        this.errorMessage = 'Email or password is incorrect, please try again!';
      }
    });
  }
}
