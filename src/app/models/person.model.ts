export interface IPerson {
    name: string;
    lastName: string;
    numberLk: string;
    placeOfBirth: string;
    dateOfBirth: Date;
    getFullName(): string;
}

 export class Person implements IPerson {
    name: string;
    lastName: string;
    numberLk: string;
    placeOfBirth: string;
    dateOfBirth: Date;
    //constructor(name, lastName, numberLk, placeOfBirth, dateOfBirth) {}
   
    getFullName(): string {
        return this.name + this.lastName;
    }
 }
