import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Project structure';

  onEverySecond() {
    console.log('second');
  }
  onEveryFiveSeconds() {
    console.log('Five second');
  }
}
