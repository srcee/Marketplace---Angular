import { Component, OnInit } from '@angular/core';
import { FbActionsService } from 'src/app/core/services/fb-actions.service';
import { UserProfile } from 'src/app/models/user-profile.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileData: UserProfile;

  constructor(
    private router: Router,
    private service: FbActionsService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.service.getUserInfo().subscribe(data => {
      let x = data.find(user => user.uid === this.auth.userUid);
      this.profileData = x;
    })
  }
  editProfileHandler() {

    this.router.navigate(['user', 'edit', this.profileData.uid])
  }
}
