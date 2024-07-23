import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { StudentService } from "./student.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { StudentListComponent } from "./components/student-list/student-list.component";
import { TestListComponent } from "./components/test-list/test-list.component";
import { StudentFormsComponent } from "./components/student-forms/student-forms.component";
import { AddStudentComponent } from "./components/add-student/add-student.component";


@NgModule({
    declarations:[ StudentListComponent, TestListComponent, StudentFormsComponent, AddStudentComponent],
    imports:[CommonModule,ReactiveFormsModule,HttpClientModule,RouterModule],
    providers:[StudentService],
    exports:[ StudentListComponent,AddStudentComponent]
})

export class StudentModule{

}