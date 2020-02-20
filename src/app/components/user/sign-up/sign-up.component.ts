import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUpService } from 'src/app/core/services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  hideRePw: boolean = true;
  hidePw: boolean = true;

  constructor(
    private createService: SignUpService
  ) { }

  ngOnInit(): void {
  }
  registerHandler(registerForm: NgForm) {
    let info = registerForm.value;
    let pw = info.password;

    delete info.password;
    delete info.rePassword;

    this.createService.signUp(pw, info)
  }
}
