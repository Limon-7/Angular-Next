import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiUtilityService {

  constructor() { }
  print(val, id) {
    const el = document.createElement("li");
    el.innerText = val;
    document.getElementById(id).appendChild(el);
  }
}
