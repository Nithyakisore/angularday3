import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comali',
  template: `
    <p ngNonBindable>
      {{comali works!}}
    </p>
    <hr>
    <input [(ngModel)] = "agree" type = "checkbox">
    <p *ngIf ="agree" >
    Hello here
    helo there
    helllo bye
    </p>
    <input [(ngModel)] = "power" type = "range" min ="0" max = "10" step ="0">
    <h1>{{power}}</h1>
    <h2> Ironman is now
    <span [ngSwitch]="power"> 
    <span *ngSwitchCase = "5">Strong </span>
     <span *ngSwitchDefault > out of game </span>
    </span>

    </h2>

<ul>
<li *ngFor = "let hero of herolist" >{{hero.title}}</li>
</ul>

  `,
  styles: []
})
export class ComaliComponent implements OnInit {
  agree = true;
  power = 6;
  herolist = [{
    "sl": 1,
    "title": "Batman",
    "gender": "male",
    "firstname": "Bruce",
    "lastname": "Wayne",
    "city": "Gotham",
    "ticketprice": 123.45,
    "releasedate": "1/26/2018",
    "poster": "assets/images/batman.jpg"
},
{
    "sl": 2,
    "title": "Superman",
    "gender": "male",
    "firstname": "Clark",
    "lastname": "Kent",
    "city": "Metropolis",
    "ticketprice": 178.67,
    "releasedate": "1/27/2018",
    "poster": "assets/images/superman.jpg"
},
{
    "sl": 3,
    "title": "Ironman",
    "gender": "male",
    "firstname": "Tony",
    "lastname": "Stark",
    "city": "New York",
    "ticketprice": 122.90,
    "releasedate": "1/27/2018",
    "poster": "assets/images/ironman.jpg"    
}, {
    "sl": 4,
    "title": "Phantom",
    "gender": "male",
    "firstname": "Kit",
    "lastname": "Walker",
    "city": "Bhangala",
    "ticketprice": 98.64,
    "releasedate": "1/27/2018",
    "poster": "assets/images/phantom.jpg"
}, {
    "sl": 5,
    "title": "Spiderman",
    "gender": "male",
    "firstname": "Peter",
    "lastname": "Parker",
    "city": "New York",
    "ticketprice": 451.34,
    "releasedate": "9/26/2018",
    "poster": "assets/images/spiderman.jpg"
},
{
    "sl": 6,
    "title": "Wonder Women",
    "gender": "female",
    "firstname": "Princess",
    "lastname": "Diana",
    "city": "Amazon",
    "ticketprice": 341.34,
    "releasedate": "11/26/2018",
    "poster": "assets/images/wonderwoman.png"
}];
  constructor() { }

  ngOnInit() {
  }

}
