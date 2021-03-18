import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMessageDirective]'
})
export class MessageDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
