import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/models/item.model';
import { UserProfile } from 'src/app/models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class FbActionsService {

  constructor(
    private fb: AngularFirestore,
    private auth: AuthService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) { }

  getUserInfo() {
    return this.fb.collection<UserProfile>('profiles').snapshotChanges().pipe(
      map(arr => {
        return arr.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          }
        })
      })
    )

  }
  getItems(type) {
    return this.fb.collection<Item[]>(type).snapshotChanges().pipe(
      map(arr => {
        return arr.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          }
        })
      })
    )

  }
  getItemInfo(type, id) {
    return this.fb.collection<Item>(type).doc(id).valueChanges();
  }
  postNewOffer(data) {
    const type = data.offerType;
    delete data.offerType

    let profile;
    this.fb.collection<UserProfile>('profiles').valueChanges().subscribe(pr => {
      profile = pr.find(x => x.uid === this.auth.userUid);

      this.fb.collection<Item>(type).add({ ...profile, ...data })
        .then(() => {
          this._snackBar.open('Your offer was created successfully!', 'Close', {
            duration: 2000,
          });
          this.route.navigate(['market', type])
        })
        .catch(err => {
          this._snackBar.open(err, 'Close', {
            duration: 2000,
          });
        })
    })
  }

  postEditOffer(type, id, data) {
    this.fb.collection(type).doc(id).update(data)
      .then(() => {
        this._snackBar.open('Your offer was edited successfully!', 'Close', {
          duration: 2000,
        });
        this.route.navigate(['details', type, id])
      })
      .catch(err => {
        this._snackBar.open(err, 'Close', {
          duration: 2000,
        });
      })
  }
  postEditProfileInfo(uid, data) {
    this.fb.collection('profiles').doc(uid).update(data)
      .then(() => {
        this._snackBar.open('Your profile info was edited successfully!', 'Close', {
          duration: 2000,
        });
        this.route.navigate(['profile'])
      })
      .catch(err => {
        this._snackBar.open(err, 'Close', {
          duration: 2000,
        });
      })
  }
  deleteOffer(type, id) {
    this.fb.collection(type).doc(id).delete()
      .then(() => {
        this._snackBar.open('The offer was deleted successfully!', 'Close', {
          duration: 2000,
        });
        this.route.navigate(['market', type])
      })
      .catch(err => {
        this._snackBar.open(err, 'Close', {
          duration: 2000,
        });
      })
  }
}
