import { Component, OnInit } from '@angular/core';
import { DbsService } from '../dbs.service';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent implements OnInit {
  busDetails: any;
  showSearch: boolean = true;
  showDetails: boolean = false;
  showSuccess: boolean = false;
  rowLength: number = 0;
  row: any;
  col: any;
  id: string = "";

  userrow:any;
  userName: string = "";
  travelName: string = "";
  source: string = "";
  destination: string = "";
  availablity: number = 0;
  registerTab: boolean = false;
  userdetails: any;
  gender: string = "Male";
  seat: number = 0;
  email: string = "";
  phoneno: number = 0;
  name: string = "";
  index:number=0;
  constructor(private mydb: DbsService) { }

  ngOnInit(): void {
  }
  getBus() {
    this.showSearch = false;
    this.showDetails = true;
    this.mydb.getBus(this.source, this.destination).subscribe(data => {
      if (data["message"]) {
        this.busDetails = data["details"];
      }
    });
    
  }
  openRegistration(i:number) {
    this.index=i;
    this.showSearch = false;
    this.registerTab = true;
    this.showDetails = false;
  }
  insertUser() {
     this.mydb.getUser(this.busDetails[this.index].tid).subscribe(data => {
      if (data["message"]) {
         this.userdetails = data["details"];
         this.id=this.busDetails[this.index].tid;
         this.travelName=this.travelName+this.busDetails[this.index].name;
         console.log(this.userName)
         this.availablity=this.busDetails[this.index].availablity;
         this.mydb.insertUser(this.userName, this.gender, this.seat, this.email, this.phoneno, this.travelName).subscribe(data => {
          if (data["message"]) {
            alert("Inserted");
          }
        });
    }
    });

    this.showSuccess = true;
    this.showSearch = false;
    this.registerTab = false;
    this.showDetails = false;
  }
  goToMainAndUpdate() {
    this.showSuccess = false;
    this.registerTab = false;
    this.showDetails = false;
    this.showSearch = true;
    this.mydb.getUser(this.busDetails[this.index].tid).subscribe(data => {
      this.id=this.busDetails[this.index].tid
      this.availablity=this.busDetails[this.index].availablity-this.seat
      console.log(this.id)
      console.log(this.availablity)
      this.mydb.updateAvailablity(this.id, this.availablity).subscribe();

    });
  }
}
