import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-layout',
  templateUrl: './subject-layout.component.html',
  styleUrls: ['./subject-layout.component.css']
})
export class SubjectLayoutComponent implements OnInit {

  routeName = "subject"
  childRoute = [
    { name: "merge", url: "merge" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
