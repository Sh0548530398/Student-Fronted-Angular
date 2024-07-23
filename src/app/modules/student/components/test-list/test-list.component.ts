import { Component, Input } from '@angular/core';
import { Test } from '../../models/test.model';
import { StudentService } from '../../student.service';


@Component({
  selector: 'test-list',
  templateUrl: './test-list.component.html'
})
export class TestListComponent {

  @Input()
  testList!: Test[]|undefined;
  

  markavg!:number;
  constructor(private _markavg: StudentService){
  
    
    
    
  }

  

}