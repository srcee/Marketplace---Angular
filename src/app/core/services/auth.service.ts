import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userUid: string;

  private _isAuth: boolean = false;
  isAuthChanged = new Subject<boolean>();

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  initializeAuthState() {
    this.afAuth.authState.subscribe((userState) => {

      if (userState) {
        this.userUid = userState.uid;
        this._isAuth = true;
        this.isAuthChanged.next(true);

      } else {
        this._isAuth = false;
        this.isAuthChanged.next(false);
      }
    });
  }

  loginUser(info) {
    this.afAuth.signInWithEmailAndPassword(info.email, info.password)
      .then(() => {
        this.initializeAuthState();

      })
      .then(() => {
        this.router.navigate(['/']);
        this._snackBar.open(`${info.email} logged in successfully!`, 'X', {
          duration: 2000,
        });
      })
      .catch((err) => {
        this._snackBar.open(err.message, 'X', {
          duration: 2000,
        });
      })

  }

  logout() {
    this._isAuth = false;
    this.isAuthChanged.next(false);
    this.afAuth.signOut();
    this._snackBar.open('LOGOUT successful', 'Close', {
      duration: 2000,
    })
    this.router.navigate(['/']);
  }
}
