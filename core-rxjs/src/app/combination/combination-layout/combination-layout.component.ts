import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combination-layout',
  templateUrl: './combination-layout.component.html',
  styleUrls: ['./combination-layout.component.css']
})
export class CombinationLayoutComponent implements OnInit {
  routeName = "combination"
  childRoute = [
    { name: "merge", url: "merge" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
