import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student, Years } from '../../models/student.model';
import { AbsantDays } from '../../models/absantday.model';
import { StudentService } from '../../student.service';
import { Test } from '../../models/test.model';


@Component({
  selector: 'student-forms',
  templateUrl: './student-forms.component.html'
})
export class StudentFormsComponent {

  studentForm!: FormGroup;
  begginingDate_s!: string;
  numbersOfDays_s!: string
  subjects: string[] = ["English", "Math", "history"];
  yearsType = Years;
  abs!: AbsantDays;
  newStudent!: Student;
  idS!: number;
  selectedTest!: Test[];

  
  private _student?: Student

  public get student(): Student | undefined {
    return this._student;
  }


 
  public set student(value: Student | undefined) {
    this._student = value;
    if (this._student != undefined) {
      this.studentForm = new FormGroup({
        "idS": new FormControl(this.student?.idS),
        "id": new FormControl(this.student?.id, [Validators.required, Validators.minLength(4)]),
        "firstname": new FormControl(this.student?.firstname, Validators.required),
        "lastname": new FormControl(this.student?.lastname),
        "address": new FormControl(this.student?.address),
        "telephone": new FormControl(this.student?.telephone),
        "active": new FormControl(this.student?.active),
        "leftDate": new FormControl(this.student?.leftDate),
        "subjects": new FormControl(this.student?.sujects),
        "years": new FormControl(this.student?.years),
        "absentDays": new FormControl(this.student?.absentDays),
      });
    }
  }

  begginingDate(begginingDate: string) { this.begginingDate_s = begginingDate }
  numbersOfDays(numbersOfDays: string) { this.numbersOfDays_s = numbersOfDays }

  showTest(tests: Test[]) {
    this.selectedTest = tests;

  }
  saveAbsantday() {
    this.newStudent = this.studentForm.value;
      this.abs = new AbsantDays(this.newStudent.idS, this.begginingDate_s, parseInt(this.numbersOfDays_s), 0)
      this.addAbsantDayInServer(this.newStudent.idS, this.abs);
      this.returnToList()
  }

  saveDeatails() {
    this.newStudent = this.studentForm.value;
    this.putInServer(this.newStudent.idS, this.newStudent)
    this.returnToList()
  }

  addAbsantDayInServer(id: number, absant: AbsantDays) {
    this._studentService.addAbsantDayInServer(id, absant).subscribe(data => {
    })
  }

  putInServer(id: number, student: Student) {
    this._studentService.putInServer(id, student).subscribe(data => {
      if (data) {
      }
      else {
        alert("the update didn't succeed")
      }
    })
  }
  getFromServerById(idS: number) {
    this._studentService.getFromServerById(idS).subscribe(data => {
      this.student = data;
    });
  }
  returnToList(){
    this._router.navigate(["/students"])
  }

  constructor(private _studentService: StudentService, private _acr: ActivatedRoute, private _router: Router) {

  }

  ngOnInit(): void {
    this._acr.paramMap.subscribe(paraMap => {
      if (paraMap.has("idS")) {
        this.idS = +paraMap.get("idS");
      }

    })
    this.getFromServerById(this.idS);
    if(this.student?.testList!=undefined){
       this.showTest(this.student?.testList)
    }
  }
}