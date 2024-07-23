import { Component, Injectable } from '@angular/core';
import {  CanActivate, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:"root"
})

export class CanActivateGaurd implements CanActivate {
  canActivate():boolean{
    if(this.isLogin==false){
      this._router.navigate(['/setting/login']);
    }
    return this.isLogin;
  }

  isLogin:boolean=false;
  login(){
    this.isLogin=true;

  }
  constructor(private _router:Router){

  }
}