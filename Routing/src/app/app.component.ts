import { Component,Injector } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[{provide:"useValues",useValue:"limon"}]
})
export class AppComponent {
  title = 'dipendency-injection';
  
  constructor(private injector:Injector) {
    this.title=injector.get("useValues");
  }
}
