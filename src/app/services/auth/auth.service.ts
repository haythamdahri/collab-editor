import {Injectable, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService implements OnInit {

  user: Observable<firebase.User>;
  userAuthenticated: boolean;
  token: string;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  ngOnInit(): void {
    const connected = localStorage.getItem('token') != 'null';
    this.userAuthenticated = connected;
  }

  isAuthenticated() {
    const connected = localStorage.getItem('token') != 'null';
    this.userAuthenticated = connected;
    return connected;
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((res) => {
      this.userAuthenticated = true;
      this.afAuth.auth.currentUser.getIdToken().then((token) => {
        this.token = token;
        localStorage.setItem("token", token);
      }).catch((error) => {
        this.token = null;
        localStorage.setItem("token", null);
      });
      return {'state': true};
    }).catch((error) => {
      console.log(error);
      return {'state': false, 'message': error.message};
    });
  }

  logout() {
    localStorage.setItem('token', null);
    this.userAuthenticated = false;
    this.token = null;
    this.afAuth.auth.signOut();
  }

  getUser() {
    return this.user;
  }

}
