import { Component, OnInit } from "@angular/core";
import { VisitListService } from "../services/visit-list.service";
import { Visit } from "../models/visit.model";
// import { Patient } from "../models/patient.model";
// import { Doctor } from "../models/doctor-list.model";

@Component({
    templateUrl: './visit-list.component.html',
    styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit { 

    private _filterText: string;
    errorMessage: string;

    filteredList: Visit [];
    private _visits: Visit [] = [];
    private _visitListService: VisitListService;
    
    constructor (visitListService: VisitListService) {
   
        this._visitListService = visitListService;
        
    }

    get filterList(): string {
        return this._filterText;
    }

    set filterList(filterValue: string) {
        this._filterText = filterValue;
        this.filteredList = this._filterText ? this.performFilter(this._filterText) : this._visits;
    }

    performFilter(filterBy: string): Visit[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this._visits
            .filter((visit: Visit) =>visit.patient.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        this._visitListService.getVisits()
        .subscribe(visits => {
                                visits = visits.map(v => this.convertToVisit(v));
                                this._visits = visits;
                                this.filteredList = this._visits},
                   error => this.errorMessage = <any> error);
    }

    convertToVisit(o: Object): Visit
    {
        let x = new Visit();
        Object.assign(x, o);
        return x;
    }

}
