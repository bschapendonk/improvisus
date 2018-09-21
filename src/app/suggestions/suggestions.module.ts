import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsService } from './suggestions.service';
import { SuggestionsComponent } from './suggestions.component';
import { SuggestionComponent } from './suggestion/suggestion.component';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuoteRight, faQuoteLeft, faForward, faSpinner, faSync } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faQuoteRight, faQuoteLeft, faForward, faSpinner, faSync);

@NgModule({
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    FontAwesomeModule
  ],
  declarations: [SuggestionsComponent, SuggestionComponent],
  exports: [SuggestionsComponent],
  providers: [SuggestionsService]
})
export class SuggestionsModule { }
