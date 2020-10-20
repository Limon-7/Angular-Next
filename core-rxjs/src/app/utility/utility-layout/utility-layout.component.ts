import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility-layout',
  templateUrl: './utility-layout.component.html',
  styleUrls: ['./utility-layout.component.css']
})
export class UtilityLayoutComponent implements OnInit {
  routeName = ""
  childRoute = [
    { name: "", url: "" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
