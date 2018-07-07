import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // getHeroes method to return the mock heroes
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  constructor(private messageService: MessageService) { }
  // of(HEROES) returns an Observable<Hero[]> that emits
  // a single value, the array of mock heroes.
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    // Note the backticks ( ` ) that define a JavaScript template literal for embedding the id.
    return of (HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_fetching the hero

    this.messageService.add(`HeroService fetched hero id=${id}`);
    return of (HEROES.find(hero => hero.id === id ));
  }
}
