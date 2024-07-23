import { Component } from "@angular/core";



@Component({
  
    selector: "app-root",
    templateUrl:"app.component.html"
})


export class AppComponent{
  title: string="ברוכים הבאים"
 time!: string;

  constructor() {
    this.time = this.getTime();
  }

 getTime(): string {
    const time: Date = new Date();
    const hour: number =time.getHours();

    if (hour < 12) {
      return "בוקר טוב";
    } else if (hour < 17) {
      return "צהריים טובים";
    } else {
      return "ערב טוב";
    }
  }
}
  