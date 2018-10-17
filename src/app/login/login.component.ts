import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email;
  public password;
  public userRegistered: boolean;
  user: User;
  @ViewChild('loginForm') formDeclaration: NgForm;

  constructor(private _authService: AuthService,
              private _activeRoute: ActivatedRoute) {}
  
  onSubmit() {
    this._authService.login(this.email, this.password);
    this.user = this._authService.currentUser;
    // console.log(this._authService.currentUser);
    // console.log(this.userRegistered);
  }

  googleLogin() {
    this._authService.signUpWithGoogle();
  }

  private showSuccessRegistrationMessage() {
    if (this._activeRoute.snapshot.params['userRegistered']) {
      this.userRegistered = true;
    }
  }

  ngOnInit() {
    this.showSuccessRegistrationMessage();
    
  }

}
