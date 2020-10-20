import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UiUtilityService } from 'src/app/_service/ui-utility.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements OnInit, AfterViewInit {
  @ViewChild("addButton") addButton: ElementRef
  constructor(private ul_service: UiUtilityService) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    let count = 1
    fromEvent(this.addButton.nativeElement, "click").subscribe(res => {
      console.log(res);
      const val = "video " + count++

      this.ul_service.print(val, "matList")
    })
  }
}
