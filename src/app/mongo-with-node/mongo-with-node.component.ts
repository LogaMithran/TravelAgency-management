import { Component, OnInit } from '@angular/core';
import { DbsService } from '../dbs.service';

@Component({
  selector: 'app-mongo-with-node',
  templateUrl: './mongo-with-node.component.html',
  styleUrls: ['./mongo-with-node.component.css']
})
export class MongoWithNodeComponent implements OnInit {
  showDisplay:boolean=false;
  showUpdate:boolean=false;
  showDelete:boolean=false;
  showInsert:boolean=false;

  insertTName:string="";
  insertTsource:string="";
  insertTdestination:string="";
  insertTmode:string="";
  insertTid:number=0;

  updateTid:number=0;
  updateTmode:any="";

  deleteTid:number=0;
  travelDetails:any;

  constructor(private mydb:DbsService) { }

  ngOnInit(): void {
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

  inserttraveller():void{
    this.mydb.insertTraveller(this.insertTid,this.insertTName,this.insertTsource,this.insertTdestination,this.insertTmode).subscribe();

  }
  updateTraveller():void{
    this.mydb.updateTraveller(this.updateTid,this.updateTmode).subscribe();

  }
  deleteTraveller():void{
    this.mydb.deleteTraveller(this.deleteTid).subscribe();

  }

  getAll(){
    // alert("Inside ts file");
    this.mydb.getAll().subscribe(data=>{
      if(data["message"]){
        this.travelDetails=data["details"];
        console.log(this.travelDetails);
      }
    });
  }

}
