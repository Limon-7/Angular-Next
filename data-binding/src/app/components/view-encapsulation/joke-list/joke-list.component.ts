import { Joke } from './../joke';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes = [
    new Joke(
      "What did the cheese say when it looked in the mirror?",
      "Hello-me (Halloumi)"
    ),
    new Joke(
      "What kind of cheese do you use to disguise a small horse?",
      "Mask-a-pony (Mascarpone)"
    ),
    new Joke(
      "A kid threw a lump of cheddar at me",
      "I thought ‘That’s not very mature’"
    )
  ]
  constructor() { }

  ngOnInit(): void {
  }
  addJoke(event) {
    this.jokes.unshift(event);
  }
}
