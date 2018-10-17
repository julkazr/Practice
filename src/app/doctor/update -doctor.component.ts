import { Component, OnInit } from "@angular/core";
import { Doctor } from "../models/doctor-list.model";
import { DoctorListService } from "../services/doctor-list.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'update-doctor-component',
    templateUrl: './update-doctor.component.html',
    styleUrls: ['./doctor-list.component.css']
})
export class UpdateDoctorComponent implements OnInit {
    doctor: Doctor;
    private _doctorListService: DoctorListService;
    errorMessage: string;
    constructor (
        private _route: ActivatedRoute,
        private _router: Router,
        clientsListService: DoctorListService) {
            this._doctorListService = clientsListService;
        }
    ngOnInit() {
        let id = Number(this._route.snapshot.paramMap.get('id'));
        if(id) {
            this.getDoctor(id);
        }
    }

    getDoctor(doctorId: number) {
        this._doctorListService.getDoctor(doctorId).subscribe(doctor => this.doctor = doctor,
        error => this.errorMessage = <any>error);
    } 
    
    onBack(): void {
        this._router.navigate(['/doctor-list']);
    }

}