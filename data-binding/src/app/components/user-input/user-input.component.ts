import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  inputText = ""
  values = ""
  enterValues = ""
  blurValues = ""
  constructor() { }
  clickWithEventObject(event) {
    this.inputText += event.target.value + "|"
  }
  clickWithTRef(value) {
    this.values += value + "|"
  }
  clickEnter(value) {
    this.enterValues = value
  }
  clickBlur(value) {
    this.blurValues = value
  }
}
