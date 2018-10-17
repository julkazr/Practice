import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { DoctorListComponent } from './doctor/doctor-list.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms'
import { environment } from '../environments/environment';
import { AddDoctorComponent } from './doctor/add-doctor.component';
import { UpdateDoctorComponent } from './doctor/update -doctor.component';
import { VisitListComponent } from './visit/visit-list.component';
import { PatientListComponent } from './patients/patient-list.component';
import { VisitReportComponent } from './visit/visit-report.component';
import { AddVisitComponent } from './visit/add-visit.component';
import { SignUpComponent } from './signup/signup.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { EqualStringsDirective } from './validators/equal-strings.directive';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UploadService } from './services/upload.service';
import { AuthenticatedUserGuard } from './guard/authenticated-user.guard';
import { NavbarComponent } from './navigation/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    HomeComponent,
    AddDoctorComponent,
    UpdateDoctorComponent,
    VisitListComponent,
    VisitReportComponent,
    AddVisitComponent,
    PatientListComponent,
    SignUpComponent,
    EqualStringsDirective,
    LoginComponent,
    UserDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot ([
      { path: 'doctor-list', component: DoctorListComponent },
      { path: 'add-doctor', component: AddDoctorComponent },
      { path: 'doctor-list/:id', component: UpdateDoctorComponent },
      { path: 'patient-list', component: PatientListComponent },
      { path: 'visit-list', component: VisitListComponent },
      { path: 'visit-list/:id', component: VisitReportComponent },
      { path: 'add-visit', component: AddVisitComponent},
      { path: 'signup', component: SignUpComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'user-details', component: UserDetailsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [UserService, AuthService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
