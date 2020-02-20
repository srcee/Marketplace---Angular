import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { FbActionsService } from 'src/app/core/services/fb-actions.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  uid: string;
  profileData;

  public editProfileInfoForm: FormGroup;

  constructor(
    private router: Router,
    private fbActionService: FbActionsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    let urlToArr = this.router.url.split('/');
    this.uid = urlToArr.pop();

    this.fbActionService.getUserInfo().subscribe(x => {

      this.profileData = x.find(pr => pr.uid === this.uid);

      let firstName = new FormControl(this.profileData.firstName, [Validators.required]);
      let lastName = new FormControl(this.profileData.lastName, [Validators.required]);
      let imgUrl = new FormControl(this.profileData.imgUrl, [Validators.required]);
      let city = new FormControl(this.profileData.city, [Validators.required]);
      let phoneNumber = new FormControl(this.profileData.phoneNumber, [Validators.required]);
      let profileInfo = new FormControl(this.profileData.profileInfo);

      this.editProfileInfoForm = new FormGroup({
        firstName: firstName,
        lastName: lastName,
        imgUrl: imgUrl,
        city: city,
        phoneNumber: phoneNumber,
        profileInfo: profileInfo
      })
    })
  }

  editHandler(data) {
    this.fbActionService.postEditProfileInfo(this.profileData.id, data.value)
  }
}
