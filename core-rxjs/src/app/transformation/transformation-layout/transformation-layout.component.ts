import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transformation-layout',
  templateUrl: './transformation-layout.component.html',
  styleUrls: ['./transformation-layout.component.css']
})
export class TransformationLayoutComponent implements OnInit {
  routeName = "transformation"
  childRoute = [
    { name: "merge", url: "merge" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
