import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppRoutingModule } from "./app-routing.module";
import { StudentModule } from "./modules/student/student.module";
import { LtrDirective } from './ltr.directive';





@NgModule({
    declarations:[AppComponent, HomePageComponent, ErrorPageComponent, LtrDirective],
    imports:[BrowserModule,StudentModule,AppRoutingModule],
    bootstrap:[AppComponent]

})

export class AppModule{

}