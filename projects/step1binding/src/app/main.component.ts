import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({

    selector:'app-main',
    template: `<h1> Hello from Citi Application </h1>
    <app-header [data]="herolist"></app-header>
    <app-grid  [data]="herolist"></app-grid>
    `

})



export class MainComponent{
    herolist = [];
    constructor(public hero:HeroService){
        this.herolist = hero.getHeroes();

    }
}