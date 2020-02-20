import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  loginHandler(loginForm: NgForm) {
    this.auth.loginUser(loginForm.value)
  }
}
