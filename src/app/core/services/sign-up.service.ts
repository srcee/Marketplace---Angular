import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserProfile } from 'src/app/models/user-profile.model';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(
    private afAuth: AngularFireAuth,
    private fbAddProfile: AngularFirestore,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  signUp(password, profileInfo: UserProfile) {
    this.afAuth.createUserWithEmailAndPassword(profileInfo.email, password)
      .then((info) => {
        profileInfo.uid = info.user.uid;
        this.fbAddProfile.collection<UserProfile>('profiles').add(profileInfo)
      })
      .then(() => {
        this._snackBar.open('Sign Up successful!', 'Close', {
          duration: 2000,
        });
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this._snackBar.open(err.message, 'Close', {
          duration: 2000,
        });
      })
  }
}
