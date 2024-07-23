import { Directive, ElementRef, HostListener } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[ltr]'
})
export class LtrDirective {


  @Input()
  language!:string;


  constructor(private _el:ElementRef) { 

    
  }

  ngOnInit(){
   
  }
  @HostListener('click', ['$event'])
  handleClick(event: Event): void {
    if(this.language==="Hebbrew"){
      document.body.classList.remove('ltr');
      document.body.classList.add('rtl');
    }
    else{
      document.body.classList.remove('rtl');
      document.body.classList.add('ltr');
    }

  }
}
