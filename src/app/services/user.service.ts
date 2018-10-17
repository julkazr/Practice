import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { User } from '../models/user.model';
import { Subscription } from '../../../node_modules/rxjs';

@Injectable()
export class UserService {
  constructor(private _db: AngularFireDatabase) { }

  createUser(newUser: User): void {

    this._db.object(`users/${newUser.id}`).set(newUser);
  }

  updateUserStatus(useruid, status): void {
    const firebaseDbSuscription: Subscription = this._db.object(`users/${useruid}`).valueChanges().subscribe((user: User) => {
      user.status = status;
      this._db.object(`users/${user.id}`).update(user);
      firebaseDbSuscription.unsubscribe();
    });
  }

}