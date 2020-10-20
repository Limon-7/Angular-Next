import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtering-layout',
  templateUrl: './filtering-layout.component.html',
  styleUrls: ['./filtering-layout.component.css']
})
export class FilteringLayoutComponent implements OnInit {

  routeName = ""
  childRoute = [
    { name: "", url: "" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
