import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomTemplateRef]'
})
export class CustomTemplateRefDirective {

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }
  @Input() set appCustomTemplateRef(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
