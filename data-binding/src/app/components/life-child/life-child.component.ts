import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ContentChildren, DoCheck, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { LifeContentComponent } from '../life-content/life-content.component';

@Component({
  selector: 'app-life-child',
  templateUrl: './life-child.component.html',
  styleUrls: ['./life-child.component.css']
})
export class LifeChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() heros
  @Input() datas
  // @ContentChild(LifeContentComponent) lifeChildContent;
  @ContentChildren(LifeContentComponent) lifeChildContent: QueryList<LifeChildComponent>;
  @ViewChildren(LifeChildComponent) lifeChildView: QueryList<LifeChildComponent>
  data = 0
  constructor() {
    console.log("1. Immediately called LifeChildComponent constructor", this.lifeChildContent);
  }
  ngOnChanges(change: SimpleChanges) {
    this.data++
    console.log("2. ngOnChanges Immediately called after LifeChildComponent Constructor");
  }

  ngOnInit(): void {
    console.log("3. ngOninti Life-child: called");
  }
  ngDoCheck() {
    console.log('4. ngDocheck called', this.data)
  }
  ngAfterContentInit() {
    const d = this.lifeChildContent.toArray();
    console.log("5. ngAfterContentInit init", d)
  }
  ngAfterContentChecked() {
    console.log("6. ngAfterContentChecked", this.lifeChildContent)
  }
  ngAfterViewInit() {
    const d = this.lifeChildView.toArray();
    console.log("7. ngAfterViewInit()", d)
  }
  ngAfterViewChecked() {
    console.log("8. ngAfterViewChecked", this.lifeChildView)
  }
  clickMe() {
    console.log("Child class");
  }
  ngOnDestroy() {
    console.log('Lifecycle destroy')
  }
}
