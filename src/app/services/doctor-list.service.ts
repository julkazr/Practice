import { Injectable } from "@angular/core";
import { Doctor } from "../models/doctor-list.model";
//import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable()
export class DoctorListService {
    
    constructor( private _db: AngularFireDatabase) { }

    getDoctors(): AngularFireList<Doctor> {
        return this._db.list('doctors', ref => ref.orderByKey());
    }

   
    getDoctor(personalId: number): Observable<Doctor> {
        return this._db.object<Doctor>(`doctors/${personalId}`).valueChanges();
    } 

    addNewDoctor(newDoctor: Doctor): void {
            
        //const path = `doctors/${newDoctor.uid}`;
        // const newDoctorData: Doctor = {
        //     uid: newDoctor.uid,
        //     name: newDoctor.name,
        //     lastName: newDoctor.lastName,
        //     numberLk: newDoctor.numberLk,
        //     placeOfBirth: newDoctor.placeOfBirth,
        //     dateOfBirth: newDoctor.dateOfBirth,
        //     position: newDoctor.position,
        //     getFullName(): { return null }
        // };Zasto je ovo ovde!!!!!!!???????
        let fbDoctor = this._db.object('doctors/' + this.guid()).set(newDoctor);
        // this.getDoctors().push(newDoctor);

    }

    updateDoctor(doctor: Doctor) {
        const doctorRef = this._db.object<Doctor>(`doctors/${doctor.uid}`);
        doctorRef.update(doctor);
    }

    private guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
} 
