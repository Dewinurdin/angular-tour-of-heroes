import { MessageService } from './message.service';

export class Hero {
    id: number;
    name: string;

    // "service-in-service" scenario: inject the MessageService into the HeroService
    // which is injected into the HeroesComponent
    constructor(private messageService: MessageService) { }
}
