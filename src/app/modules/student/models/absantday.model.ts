
export class AbsantDays{
    idN!:number;
    begginingDate!: string;
    numbersOfDays! : number;
    sumdays:number=0;

    constructor(idN:number,begginingDate: string, numbersOfDays:number ,sumdays:number){
        this.idN=idN
     this.begginingDate=begginingDate,
     this.numbersOfDays=numbersOfDays,
     this.sumdays=sumdays
 }
}