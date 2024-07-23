import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "./models/student.model";
import { AbsantDays } from "./models/absantday.model";


@Injectable()
export class StudentService {

  getFromServer():Observable<Student[]>{
    return this._http.get<Student[]>("api/Student");
  }

  getFromServerById(idS:number):Observable<Student>{
    return this._http.get<Student>("api/Student/"+idS);
  }
//הסרוור לא נותן קריאה לכמה פונקציות של get 

  getFromServerByActive(active:boolean):Observable<Student[]>{
    return this._http.get<Student[]>("api/Student/"+active);
  }

  postInServer(students:Student):Observable<boolean>{
   return this._http.post<boolean>("api/Student",students);
  }
  putInServer(id:number, students:Student):Observable<boolean>{
   
    return this._http.put<boolean>("api/Student/"+id,students);
   }
   addAbsantDayInServer(id:number, absant:AbsantDays):Observable<boolean>{
   
    return this._http.post<boolean>("api/Student/"+id,absant);
   }
   deletFromServer(idS:number):Observable<boolean>{
    return this._http.delete<boolean>("api/Student/"+idS);
   }
 


  constructor(private _http:HttpClient)
  {
    
  }
}