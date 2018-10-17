import { Component, OnInit, ViewChild } from "@angular/core";
import { Doctor } from "../models/doctor-list.model";
import { DoctorListService } from "../services/doctor-list.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "../../../node_modules/@angular/forms";

@Component({
    selector: 'add-doctor-component',
    templateUrl: './add-doctor.component.html',
    styleUrls: ['./doctor-list.component.css']
})
export class AddDoctorComponent {
    doctor: Doctor;
    @ViewChild('form') formDeclaration: NgForm;
    
    //submitted: boolean = false;
    private _doctorListService: DoctorListService;
    errorMessage: string;
    constructor (
        private _route: ActivatedRoute,
        private _router: Router,
        doctorListService: DoctorListService) {
            this._doctorListService = doctorListService;
        }
    
    addNewDoctor(): void {
        let newDoctor = this.formDeclaration.form.value;
        this._doctorListService.addNewDoctor(newDoctor);
    }
    
    onBack(): void {
        this._router.navigate(['/doctor-list']);
    }

}