import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imageSrc:string='';
  isclicked:boolean=false;
open(source:string):void{
this.imageSrc=source;
this.isclicked=true;
}
close(){
  this.isclicked=false;
}
}
