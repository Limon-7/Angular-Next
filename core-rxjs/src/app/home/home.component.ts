import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datas = [
    { id: 1, name: "Creation", url: "creation" },
    { id: 2, name: "Transformation", url: "transformation" },
    { id: 3, name: "Utility", url: "utility" },
    { id: 4, name: "Filtering", url: "filtering" },
    { id: 5, name: "Subject", url: "subject" },
    { id: 5, name: "Combination", url: "combination" },
    { id: 7, name: "Error Handling", url: "error" },
  ]
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  handleLink(e) {
    console.log("Url:", e)
    this.route.navigate([e]);
  }
}
