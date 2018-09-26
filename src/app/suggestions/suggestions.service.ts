import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Improvisus {
  suggestions: Suggestion[];
}

export interface Suggestion {
  name: string;
  items: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {
  constructor(private http: HttpClient) { }

  getImprovisus() {
    return this.http.get<Improvisus>('assets/improvisus.json');
  }
}
