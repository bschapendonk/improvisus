import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SuggestionsService, Suggestion } from './suggestions.service';
import { SuggestionComponent } from './suggestion/suggestion.component';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html'
})
export class SuggestionsComponent implements OnInit {
  suggestions: Suggestion[];

  @ViewChildren(SuggestionComponent)
  private suggestionComponents: QueryList<SuggestionComponent>;

  constructor(private service: SuggestionsService) {
  }

  ngOnInit() {
    this.service
      .getImprovisus()
      .subscribe(improvisus => this.suggestions = improvisus.suggestions);
  }

  next() {
    this.suggestionComponents.forEach(suggestionComponent => suggestionComponent.next());
  }
}
