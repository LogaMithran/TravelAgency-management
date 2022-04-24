import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbsService {

  constructor(private http:HttpClient) {

  }
  getAll():Observable<any>{
    return (this.http.get("http://localhost:5000/display"));
  }
  insertTraveller(id:number,name:string,source:string,destination:string,mode:string):Observable<any>{
    alert("Inserted Successfully");
    return (this.http.get("http://localhost:5000/inserttravel?travellerid="+id+"&travellername="+name+"&source="+source+"&destination="+destination+"&mode="+mode));   
  }

  updateTraveller(id:number,mode:string):Observable<any>{
    alert("Updated Successfully");
    return (this.http.get("http://localhost:5000/updatetravel?travellerid="+id+"&mode="+mode));
  }
  deleteTraveller(id:number):Observable<any>{
    alert("Deleted Successfully");
    return (this.http.get("http://localhost:5000/deletetravel?travellerid="+id));
  }

  getBus(source:string,destination:string):Observable<any>{
    return (this.http.get("http://localhost:5000/displaydetails?source="+source+"&destination="+destination));
  }

  insertUser(name:string,gender:string,seat:number,email:string,phone:number,travelname:string):Observable<any>{
    alert("Inserted Successfully");
    return (this.http.get("http://localhost:5000/inserttravel?travellername="+name+"&gender="+gender+"&seat="+seat+"&email="+email+"&phoneno="+phone+"&travelname="+travelname));
    //console.log(this.http.get("http://localhost:5000/inserttravel?name="+name+"&gender="+gender+"&seat="+seat+"&email="+email+"&phoneno="+phone+"&travelname="+travelname));
  }

  updateAvailablity(id:string,availablity:number):Observable<any>{
    return(this.http.get("http://localhost:5000/updatetravel?travellerid="+id+"&availablity="+availablity));
  }
  getUser(id:number):Observable<any>{
    return (this.http.get("http://localhost:5000/displayuser?tid="+id));
  }
}
