import { Component } from '@angular/core';
import { DoctorListService } from './services/doctor-list.service';
import { VisitListService } from './services/visit-list.service';
import { PatientListService } from './services/patient-list.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DoctorListService, VisitListService, PatientListService]
})
export class AppComponent {
  title = 'app';
  constructor( private _authService: AuthService) {}
  logout() {
    this._authService.logout();
  }
}
