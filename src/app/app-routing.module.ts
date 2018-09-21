import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuggestionsComponent } from './suggestions/suggestions.component';

const routes: Routes = [
  { path: '', component: SuggestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
