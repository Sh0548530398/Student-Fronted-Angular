import { Component } from '@angular/core';
import { CanActivateGaurd } from '../canActivateGaurd.service';
import { Router } from '@angular/router';


@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent  {
  
  login(){
    
    this._gaurd.login()
    this._router.navigate(['/setting/acount']);

  }
  constructor(private _gaurd:CanActivateGaurd, private _router:Router){

  }
}
