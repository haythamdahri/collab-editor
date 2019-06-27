import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      search: new FormControl('', [Validators.required, Validators.max(100)])
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  search() {
    if (this.form.valid) {
      this.router.navigate(['/collaborate'], {queryParams: {'query': this.form.controls.search.value}});
    } /*else {
      Swal.fire('Hello world!');
    }*/
  }
}
