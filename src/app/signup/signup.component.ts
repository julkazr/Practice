import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user.model';
import { NgForm } from '../../../node_modules/@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
//import firebase = require('../../../node_modules/firebase');

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  user: User = new User();
  @ViewChild('signupForm') formDeclaration: NgForm;

  constructor(private _authService: AuthService,
              private _router: Router,
              private _route: ActivatedRoute) {}

  googleSignup() {
    this._authService.signUpWithGoogle();
  }

  onSubmit() {
    this._authService.signUpWithEmailAndPassword(this.user);
  }

  ngOnInit() {}
}