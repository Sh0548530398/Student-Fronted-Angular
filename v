
app.component.html
<h1>{{title}}</h1>

<app-student-list></app-student-list>
app.component.ts
import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";


@Component({
  
    selector: "app-root",
    templateUrl:"app.component.html"
})


export class AppComponent{
  title: string="my first app"
}
app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StudentListComponent } from './student-list/student-list.component';



@NgModule({
    declarations:[AppComponent, StudentListComponent],
    imports:[BrowserModule],
    bootstrap:[AppComponent]

})

export class AppModule{

}
index.html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>MyFirstApp</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
  
</body>
</html>

main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

student-list.component.css

student-list.component.html
<p>student-list works!</p>
<ul>
    <li *ngFor ="let student of students">
        {{student.id}}: {{student.firstname}}
    </li>
</ul>

student-list.component.ts
import { Component ,OnInit} from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
    
 students: Student[]=[{id: "1234",firstname:"shoshi",lastname:"eliyahu"},
  {id: "2345",firstname:"sari",lastname:"nenkanski"},
  {id: "3456",firstname:"dvori",lastname:"birman"}];
  constructor(){}
  ngOnInit(): void {
    
  }
 

}

student.ts


export class Student{
    id! : string;
    firstname! : string;
    lastname! :string;
}
styles.css
/* You can add global styles to this file, and also import other style files */
