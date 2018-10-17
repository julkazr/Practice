import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, Subscription } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from '../../../node_modules/firebase';
import { UserService } from './user.service';
import { User, UserStatus } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: Observable<firebase.User> = null;
  private _authorizeRoute$: Observable<boolean>;
  public signedInUser;

  constructor(
    private _db: AngularFireDatabase,
    private _userService: UserService,
    private _afAuth: AngularFireAuth,
    private _router: Router
  ) {
      _db.list('users');
      _afAuth.authState;
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // get currentUserId(): string {
  //   return this.authenticated ? this.authState.uid : '';
  // }

  signUpWithGoogle() {
    return this._afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signUpWithEmailAndPassword(newUser: User) {
    console.log()
    this._afAuth.auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((firebaseResponse) => {
        newUser.id = firebaseResponse.user.uid;
        
        let user = firebase.auth().currentUser;
        user.sendEmailVerification().then(resp => alert('Verification email sent')).catch(err => err.message);
        delete newUser.password;
        this._userService.createUser(newUser);
        this._router.navigate(['/login', {userRegistered: true}]);
      }).catch();
  }

  login(email: string, password: string) {
    let user = firebase.auth().currentUser;
    this._afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(res => {
      // let user = firebase.auth().currentUser;
      const afSubscription: Subscription = this._afAuth.authState.subscribe((firebaseUser) => {
        afSubscription.unsubscribe();
        this.signedInUser = firebaseUser;
        this._userService.updateUserStatus(firebaseUser.uid, UserStatus.Online);
        console.log(this.signedInUser);
        this._router.navigate(['/user-details']);
        console.log(firebaseUser);
      });
    });
  }

  logout() {
    let userUID = null;
    let user = firebase.auth().currentUser;

    let afSubscription: Subscription = this._afAuth.authState.subscribe((firebaseUser) => {
      userUID = firebaseUser.uid;
      afSubscription.unsubscribe();

      this._afAuth.auth.signOut().then(() => {
        this._userService.updateUserStatus(userUID, UserStatus.Offline);
      });
    });
    console.log(user);
  }

  public isRouteProtected(): Observable<boolean> {
    return this._authorizeRoute$;
  }
}
