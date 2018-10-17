import { Component, ViewChild } from "@angular/core";
import { Visit } from "../models/visit.model";
import { VisitListService } from "../services/visit-list.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
    templateUrl: './add-visit.component.html',
    styleUrls: ['./visit-list.component.css']
})

export class AddVisitComponent {
    visit: Visit;
    @ViewChild('form') formDeclaration: NgForm;
    private _visitListService: VisitListService;
    errorMessage: string;
    constructor (
        private _route: ActivatedRoute,
        private _router: Router,
        visitListService: VisitListService) {
            this._visitListService = visitListService;
        }
    
    onSubmit() {
        const newVisit = this.formDeclaration.form.value;
        this._visitListService.addVisit(newVisit);
    }
    
    onBack(): void {
        this._router.navigate(['/visit-list']);
    }
}