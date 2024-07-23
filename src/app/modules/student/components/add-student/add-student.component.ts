import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student, Years } from '../../models/student.model';
import { StudentService } from '../../student.service';
import { Test } from '../../models/test.model';

@Component({
  selector: 'add-student',
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent {

  student!: Student
  studentForm!: FormGroup;
  subjects: string[] = ["English", "Math", "history"];
  yearsType = Years;
  newStudent!: Student;

 setForm(){
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
  
  addStudent() {
    this.newStudent = this.studentForm.value;
    this.postInServer(this.newStudent)
    this.returnToList()
    
  }

  postInServer(student:Student){
    this._studentService.postInServer(student).subscribe(data=>{
      alert("הוספת התלמיד בוצעה בהצלחה")
    })
  }
  
  returnToList(){
    this._router.navigate(["/students"])
  }

  constructor(private _studentService: StudentService, private _acr: ActivatedRoute, private _router: Router) {

  }

  ngOnInit(): void {
    this.student=new Student("", "", "", "", "", true,  [new Test("1234", new Date(2023, 12, 23), "English", 80)], [], 
    Years.first, [{ idN: 0, numbersOfDays: 0, begginingDate: "", sumdays: 0 }]);
    this.setForm();
  }

}