import { Injectable } from "../../../node_modules/@angular/core";
import { Patient } from "../models/patient.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "../../../node_modules/rxjs/operators";

@Injectable()
export class PatientListService {
    private _patient: Patient;
    private _patientUrl = 'https://next.json-generator.com/api/json/get/EJpBLKTmr';
    private _http: HttpClient;
    constructor( http: HttpClient) {
        this._http = http;
    }

    getPatients(): Observable<Patient[]> {
        return this._http.get<Patient[]>(this._patientUrl);
    }

    getPatient(personalId: number): Observable<Patient> {
        return this.getPatients()
            .pipe(
                map(
                    (patients: Patient[]) =>
                        patients.find(p =>
                            p.patientId === personalId)));
    }
}