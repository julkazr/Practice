// import { Doctor } from "./doctor-list.model";
// import { Patient } from "./patient.model";

export interface IVisit {
    visitId: number;
    date: string;
    doctor: string;
    patient: string;
    diagnose: string;
    //getReport(): string;
}

export class Visit{
    visitId: number;
    date: string;
    doctor: string;
    patient: string;
    diagnose: string;
}