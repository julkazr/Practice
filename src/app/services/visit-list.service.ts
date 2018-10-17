import { Visit } from "../models/visit.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class VisitListService {
    private _visit: Visit;
    private _visitUrl = 'https://next.json-generator.com/api/json/get/NkatKP6XB';
    private _http: HttpClient;
    constructor( http: HttpClient) {
        this._http = http;
    }

    getVisits(): Observable<Visit[]> {
        return this._http.get<Visit[]>(this._visitUrl);
    }

   
    getVisit(personalId: number): Observable<Visit> {
        return this.getVisits()
                .pipe(
                    map(
                        (visits: Visit[]) =>
                            visits.find(v =>
                                v.visitId === personalId)));
    } 

    addVisit(newVisit) {}
} 
