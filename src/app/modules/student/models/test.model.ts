

export class Test{
    id!: string;
    date?: Date;
    descreption?: string;
    mark?: number;
    
    constructor( id:string,  date: Date, descreption: string, mark:number){
        this.id=id;
        this.date=date;
        this.descreption=descreption;
        this.mark=mark;
    }
}