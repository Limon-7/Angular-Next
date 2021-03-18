import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bank-account',
  inputs: ['bankName', 'id: account-id'],
  outputs: ['everySecond', 'fiveSecs:everyFiveSeconds'],
  template: `
  <h1> Bank Name: {{ bankName }}           </h1> 
    <p> Account Id: {{ id }}               </p>
  `,
  styleUrls: ['./bank-account.component.css'],
  // encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush
  // animations:
  preserveWhitespaces: true//default false
})
export class BankAccountComponent implements OnInit {
  everySecond = new EventEmitter<string>();
  fiveSecs = new EventEmitter<string>();
  constructor() {
    setInterval(() => this.everySecond.emit('event'), 5000);
    setInterval(() => this.fiveSecs.emit('event'), 5000);
  }

  ngOnInit(): void {
  }

}
