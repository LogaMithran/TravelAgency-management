import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formmodule',
  templateUrl: './formmodule.component.html',
  styleUrls: ['./formmodule.component.css']
})
export class FormmoduleComponent implements OnInit {
  userName:string="";
  passWord:string="";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    alert("form clickes");
  }
}
