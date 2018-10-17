import { Person } from "./person.model";
import { Doctor } from "./doctor-list.model";

export class Patient  extends Person{
    patientId: number;
    height: number;
    weight: number;
    bloodType: string;
    doctor: Doctor;
}