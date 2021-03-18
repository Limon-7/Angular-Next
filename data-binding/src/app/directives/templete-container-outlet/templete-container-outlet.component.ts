import { Component, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { MessageDirectiveDirective } from '../message-directive.directive';

@Component({
  selector: 'app-templete-container-outlet',
  templateUrl: './templete-container-outlet.component.html',
  styleUrls: ['./templete-container-outlet.component.css']
})
export class TempleteContainerOutletComponent implements OnInit {

  @ViewChild('msg') msgTempRef: TemplateRef<any>
  @ViewChildren(MessageDirectiveDirective) queryList: QueryList<MessageDirectiveDirective>;
  isVisible = true;
  allPersons = [
    { name: 'Mahesh', age: '25' },
    { name: 'Shakti', age: '23' },
    { name: 'Krishna', age: '23' },
    { name: 'Radha', age: '21' },
  ];
  showCpIf = ""
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.queryList.map(messageDirective =>
      messageDirective.viewContainerRef.createEmbeddedView(this.msgTempRef));
  }
}
