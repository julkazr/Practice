import { Component, OnInit } from "@angular/core";
import { DoctorListService } from "../services/doctor-list.service";
import { Doctor } from "../models/doctor-list.model";

@Component ({
    selector: 'doctor-list-selector',
    templateUrl: './doctor-list.component.html',
    styleUrls: ['./doctor-list.component.css']
})

export class DoctorListComponent implements OnInit {

    private _filterText: string;
    errorMessage: string;
    filteredList: Doctor [];
    private _doctors: Doctor [] = [];
    private _doctorListService: DoctorListService;
    
    constructor (doctorListService: DoctorListService) {
   
        this._doctorListService = doctorListService;
    }

    get filterList(): string {
        return this._filterText;
    }

    set filterList(filterValue: string) {
        this._filterText = filterValue;
        this.filteredList = this._filterText ? this.performFilter(this._filterText) : this._doctors;
    }

    performFilter(filterBy: string): Doctor[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this._doctors
            .filter((doctor: Doctor) =>doctor.getFullName().toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        this._doctorListService.getDoctors().valueChanges()
        .subscribe(doctors => {
                                //doctors = doctors.map(d => this.convertToDoctor(d));
                                this._doctors = doctors;
                                this.filteredList = this._doctors},
                   error => this.errorMessage = <any> error);
    }

    // convertToDoctor(o: Object): Doctor
    // {
    //     let x = new Doctor();
    //     Object.assign(x, o);
    //     return x;
    // }
}