import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html'
})
export class SuggestionComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  items: string[] = [''];

  item: string;

  next: () => void;

  constructor() {
  }

  ngOnInit() {
    const random = (items: string[]) => {
      let copy = items.slice(0);
      return () => {
        if (copy.length < 1) {
          copy = items.slice(0);
        }
        const index = Math.floor(Math.random() * copy.length);
        this.item = copy[index];
        copy.splice(index, 1);
      };
    };

    this.next = random(this.items);
    this.next();
  }
}
