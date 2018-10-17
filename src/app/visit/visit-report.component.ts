import { Component } from "@angular/core";
import { Visit } from "../models/visit.model";
import { VisitListService } from "../services/visit-list.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl: './visit-report.component.html',
    styleUrls: ['./visit-list.component.css']
})

export class VisitReportComponent {
    visit: Visit;
    private _visitListService: VisitListService;
    errorMessage: string;
    constructor (
        private _route: ActivatedRoute,
        private _router: Router,
        visitListService: VisitListService) {
            this._visitListService = visitListService;
        }
    ngOnInit() {
        let id = Number(this._route.snapshot.paramMap.get('id'));
        if(id) {
            this.getVisit(id);
        }
    }

    getVisit(visitId: number) {
        this._visitListService.getVisit(visitId).subscribe(visit => this.visit = visit,
        error => this.errorMessage = <any>error);
    } 
    
    onBack(): void {
        this._router.navigate(['/visit-list']);
    }
}