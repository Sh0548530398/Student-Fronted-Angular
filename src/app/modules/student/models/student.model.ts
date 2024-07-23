
import { AbsantDays } from "./absantday.model";
import { Test } from "./test.model";


export class Student{
    idS!:number;
    id!: string;
    firstname?: string;
    lastname?: string;
    address?: string;
    telephone?:string;
    active!:boolean;
    marksAvg!: number;
    leftDate?: string;
    testList?: Test[];
    sujects? : string[];
    years?: Years;
   absentDays!: AbsantDays[];
   constructor( id:string,  firstname: string, lastname: string, addres:string,
    telephone:string,active:boolean, testList: Test[],subjects:string[],years:Years, absentDays:AbsantDays[]){
       this.idS=0;
   this.id=id;
   this.firstname=firstname;
   this.lastname=lastname;
   this.address=addres;
   this.telephone=telephone;
   this.active=active;
   this.testList=testList;
   this.sujects=subjects;
   this.years=years;
   this.absentDays= absentDays;

}
}
   export enum Years{
    first,
    second,
    third
   }