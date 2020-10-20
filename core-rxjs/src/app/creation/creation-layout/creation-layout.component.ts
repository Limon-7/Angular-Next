import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation-layout',
  templateUrl: './creation-layout.component.html',
  styleUrls: ['./creation-layout.component.css']
})
export class CreationLayoutComponent implements OnInit {

  routeName = "creation"
  childRoute = [
    { name: "formEvent", url: "form-event" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
