import { Component, OnInit } from '@angular/core';
import { DbsService } from '../dbs.service';

@Component({
  selector: 'app-crudoperations',
  templateUrl: './crudoperations.component.html',
  styleUrls: ['./crudoperations.component.css']
})
export class CrudoperationsComponent implements OnInit {
  showDisplay:boolean=false;
  showUpdate:boolean=false;
  showDelete:boolean=false;
  showInsert:boolean=false;

  updateName:string="";
  deleteName:string="";

  
  insertTName:string="";
  insertTsource:string="";
  insertTdestination:string="";
  insertTmode:string="";

  travelDetails:any;

  travelList=[{name:"mithran",source:"KVP",destination:"MDU",mode:"bus"},
  {name:"Josh",source:"TVL",destination:"CHNN",mode:"train"},
  {name:"Raja",source:"TVL",destination:"CBE",mode:"flight"}];

  confirmBooking={name:"",source:"",destination:"",mode:""};

  constructor(private mydb:DbsService) { }

  ngOnInit(): void {
  }
  showDetails(index:number):void{
    this.showDisplay=true;
    this.showUpdate=false;
    this.confirmBooking = this.travelList[index];
  }
  updateMode(index:number):void{
    this.confirmBooking=this.travelList[index];
    this.showUpdate=true;
    this.showDisplay=false;
    this.travelList[index].mode=this.updateName;
  }
  deleteTraveller(index:number):void{
    this.showDisplay=false;
    this.showUpdate=false;
    this.travelList.splice(index,1);
  }
  insertTraveller(){

  }
  insertdetails(){
    // alert("hi");
    this.showDisplay=false;
    this.showUpdate=false;
    this.showDelete=false;
    this.showInsert=true;
  }
  updatedetails(){
    this.showDisplay=false;
    this.showUpdate=true;
    this.showDelete=false;
    this.showInsert=false;
  }
  deletedetails(){
    this.showDisplay=false;
    this.showUpdate=false;
    this.showDelete=true;
    this.showInsert=false;
  }
}
