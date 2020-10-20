import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-layout',
  templateUrl: './error-layout.component.html',
  styleUrls: ['./error-layout.component.css']
})
export class ErrorLayoutComponent implements OnInit {
  routeName = "error"
  childRoute = [
    { name: "", url: "" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
