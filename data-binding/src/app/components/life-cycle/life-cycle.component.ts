import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {

  heros = [
    { name: "C#", department: "BCSE" },
    { name: "C++", department: "BCSE" },
    { name: "Python", department: "BCSE" },
    { name: "Javascript", department: "BCSE" },
  ]
  arbitraryData = "initial";
  constructor() {
    console.log("I am from Lifecycle constructor");
    setTimeout(() => {
      this.arbitraryData = 'final';
    }, 5000);
  }

  ngOnInit(): void {
    console.log("I am from Lifecycle ngOninit");
  }
  addNew() {
    let d = { name: "Angular", department: "ForntEnd" };
    this.heros = [...this.heros, d];
  }
  reset() {

    this.heros = [];
  }
}
