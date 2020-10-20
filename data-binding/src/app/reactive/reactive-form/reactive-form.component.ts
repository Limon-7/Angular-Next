import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Registration } from 'src/app/model/registration';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  rForm: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.rForm = new FormGroup({
      name: new FormControl(""),
      account: new FormGroup({
        email: new FormControl(""),
        confirm: new FormControl(""),
      })
    })
  }
  onSubmit({ value, valid }: { value: Registration, valid: boolean }) {
    console.log(value, valid);
  }
}
