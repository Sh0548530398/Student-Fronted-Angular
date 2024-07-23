import { Component } from '@angular/core';
import { Student } from '../../models/student.model';
import { Test } from '../../models/test.model';
import { StudentService } from '../../student.service';
import { Router } from '@angular/router';
import {  debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html'

})
export class StudentListComponent {

  students!: Student[];
  filterStudents!:Student[];
  selectedTest!: Test[]|undefined;
  newStudent!: boolean;
  idS!:number;
  
  
  search(name:string){
    this._studentService.getFromServer().pipe(
      debounceTime(100),
      distinctUntilChanged(),
    ).subscribe(data=>{
     this.students=data.filter(s=>s.firstname?.indexOf(name)!=-1)
     });
  };

  
 
  showTest(tests: Test[]| undefined,id:number) {
    if(tests!=undefined){
    this.selectedTest = tests;
    this.idS=id;

    }
    }
    delettest(tests: Test[]| undefined){
      if(tests!=undefined){
        this.selectedTest = undefined;
    
        }
    }
  addStudent() {
      this._router.navigate(["/addStudent"]);
     
  }

  getFromServer(){
    this._studentService.getFromServer().subscribe(data=>{
      this.students=data;
     });
  }
  
  getFromServerByActive(active:boolean){
    this._studentService.getFromServerByActive(active).subscribe(data=>{
      this.students=data;
    });
  }

  deletFromServer(idS:number){
    this._studentService.deletFromServer(idS).subscribe(data=>{
      if (data) {
        for (let s of this.students) {
          if (s.idS == idS) {
            let studentToDeleate = s;
            let studentToDeleate1 = this.students.indexOf(studentToDeleate);
            this.students.splice(studentToDeleate1, 1);
          }
        }
      }
    },err=>{
      alert(err);
    })

  }

  constructor(private _studentService: StudentService,private _router:Router) {
  }

  ngOnInit(){
    this.getFromServer();
  }
}

