import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  show: boolean = true;
  buttonName: string = "Show";

  movie = ["Movie1", "Movie 2", "Movie 3"];

  constructor() { }

  ngOnInit(): void {
  }

  showName(): void {
    this.show = !this.show;
    if (this.buttonName) {
      this.buttonName = "hide";
    }
    else if(this.buttonName=="hide"){
      this.buttonName = "show";
    }
  }

}
