import { Component } from '@angular/core';

@Component({
  selector: 'app-root-module',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'data-binding';
  subTitle = 'Welcome limon';
  name = 'Welcome limon';
  isDisabled = false;
  fontSize = 30;
  isBold = false;
  isItalic = true;
  addStyles = () => {
    return {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size.px': this.fontSize,
      'padding.px': 20,
    };
    // return styles;
  };
  addClassWithClass = 'boldClass';
  applyBoldClass: boolean = true;
  applyItalicsClass: boolean = true;
  addClasses = () => {
    return {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicsClass,
    };
  };
}
