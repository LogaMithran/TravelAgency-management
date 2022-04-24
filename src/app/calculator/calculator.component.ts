import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  num1:number=0;
  num2:number=0;
  res:number=0;
  cOperator:string="Addition";
  answer:string="";
  constructor() { }

  ngOnInit(): void {
  }
  calculate():void{
    if(this.cOperator=="Addition"){
      this.res=this.num1+this.num2;
      this.answer="Addition of "+this.num1+" and "+this.num2+" is "+this.res;
    }
    else if(this.cOperator=="Subtraction"){
      this.res=this.num1-this.num2;
      this.answer="Subtraction of "+this.num1+" and "+this.num2+" is "+this.res;
    }
    else if(this.cOperator=="Multiplication"){
      this.res=this.num1*this.num2;
      this.answer="Multiplication of "+this.num1+" and "+this.num2+" is "+this.res;
    }
    else if(this.cOperator=="Division"){
      this.res=this.num1/this.num2;
      this.answer="Division of "+this.num1+" and "+this.num2+" is "+this.res;
    }
    else if(this.cOperator=="Modular"){
      this.res=this.num1%this.num2;
      this.answer="Modular of "+this.num1+" and "+this.num2+" is "+this.res;
    }
  }

}
