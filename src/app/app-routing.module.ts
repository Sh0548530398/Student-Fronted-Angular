import { NgModel } from "@angular/forms";
import { Route, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { NgModule } from "@angular/core";
import { StudentListComponent } from "./modules/student/components/student-list/student-list.component";
import { StudentFormsComponent } from "./modules/student/components/student-forms/student-forms.component";
import { AddStudentComponent } from "./modules/student/components/add-student/add-student.component";


const APP_ROUTES: Route[]=[
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component: HomePageComponent},
    {path:"students", component: StudentListComponent},
    {path:"students/:idS", component: StudentFormsComponent},
    {path:"addStudent", component:AddStudentComponent},
    {path:"setting",loadChildren:()=>import("./modules/setting/setting.module").then(m=>m.SettingModule)},
    {path:"**", component:ErrorPageComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(APP_ROUTES)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}