import { Component, OnInit } from '@angular/core';
import { User, UserModel } from '../model/user';

@Component({
  selector: 'app-templete-form',
  templateUrl: './templete-form.component.html',
  styleUrls: ['./templete-form.component.css']
})
export class TempleteFormComponent implements OnInit {
  userModel = new User("Dhaka", "Uttara", "1230", "limon", "limon@mail.com", 123456, "123456", 0, "male", true);
  user = new UserModel("limon", "limon@mail.com", 17171, 1, "male", true);

  country = [
    { id: 1, value: "Bangladesh" },
    { id: 2, value: "Pakistan" },
    { id: 3, value: "Nepal" },
    { id: 4, value: "Canada" },
    { id: 5, value: "America" },
    { id: 6, value: "Spain" },

  ]
  constructor() {

  }

  ngOnInit(): void {
  }
  register() {

  }
  handleChange(e) {
    console.log(e.target.name, e.target.value)
  }

}
