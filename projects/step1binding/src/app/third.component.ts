import { Component } from "@angular/core";
//index
//even
//odd
//first
//last

@Component({
    selector : 'app-third',
    template : `
    <h1> Hello from Citi Application </h1>

    <ul class="nav">
  <li class="nav-item" *ngFor = "let hero of herolist">
    <a class="nav-link active" href="#">{{hero.title}}</a>
  </li>
  </ul>
    <table class=" table  table-striped table-bordered .table-hover">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Sl #</th>
                <th scope="col">Title</th>
                <th scope="col">Full Name</th>
                <th scope="col">Poster</th>
                <th scope="col">City</th>
                <th scope="col">Ticket Price</th>
                <th scope="col">Release Date</th>
                <th scope="col">Number of Movies</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let hero of herolist ;index as idx; first as fst;last as lst ;odd as od ;even as evn">
                <td>{{ idx +1}}</td>
                <td>
                <span *ngIf = "fst"> FirstHero</span>
                <span *ngIf = "!fst && !lst "> In Between </span>
                <span *ngIf = "lst"> LastHero </span>
                <span *ngIf = "od"> Odd </span>
                <span *ngIf = "evn"> Even </span>
                {{ hero.title | uppercase}}</td>
                <td>{{ hero.firstname+' '+hero.lastname }}</td>
                <td><img src = "{{ hero.poster }}" width = "50" ></td>
                <td>{{ hero.city }}</td>
                <td>{{ hero.ticketprice  | currency :'INR':'symbol' :'3.3-4'}}</td>
                <td>{{ hero.releasedate| date : 'dd/MM/yyyy' }}</td>
                <td>
                <button>{{ hero.movieslist.length}} </button></td>
            </tr>
        </tbody>
    </table>
    `,
styles:[`
    .orangebox{
        background-color : orange  
    }`
]

})

export class Thirdcomponent{
    herolist = [{
        "sl": 1,
        "title": "Batman",
        "gender": "male",
        "firstname": "Bruce",
        "lastname": "Wayne",
        "city": "Gotham",
        "ticketprice": 123.4567,
        "releasedate": "1/26/2018",
        "poster": "assets/images/batman.jpg",
        "movieslist": [
            {
                "title": "Batman Begins",
                "poster": "assets/images/bat1_tn.jpg"
            }, {
                "title": "Dark Knight",
                "poster": "assets/images/bat2_tn.jpg"
            }, {
                "title": "Dark Knight Raises",
                "poster": "assets/images/bat3_tn.jpg"
            }
        ]
    
    },
    {
        "sl": 2,
        "title": "Superman",
        "gender": "male",
        "firstname": "Clark",
        "lastname": "Kent",
        "city": "Metropolis",
        "ticketprice": 178.6789,
        "releasedate": "1/27/2018",
        "poster": "assets/images/superman.jpg",
        "movieslist": [
            {
                "title": "Superman The Movie",
                "poster": "assets/images/super1_tn.jpg"
            }, {
                "title": "Superman Returns",
                "poster": "assets/images/super2_tn.jpg"
            }, {
                "title": "Superman Man of Steel",
                "poster": "assets/images/super3_tn.jpg"
            }
        ]
    
    },
    {
        "sl": 3,
        "title": "Ironman",
        "gender": "male",
        "firstname": "Tony",
        "lastname": "Stark",
        "city": "New York",
        "ticketprice": 122,
        "releasedate": "1/27/2018",
        "poster": "assets/images/ironman.jpg",
        "movieslist": [
            {
                "title": "Ironman",
                "poster": "assets/images/iron1_tn.jpg"
            }, {
                "title": "Ironman 2",
                "poster": "assets/images/iron2_tn.jpg"
            }, {
                "title": "Ironman 3",
                "poster": "assets/images/iron3_tn.jpg"
            }
        ]
    
    }, {
        "sl": 4,
        "title": "Phantom",
        "gender": "male",
        "firstname": "Kit",
        "lastname": "Walker",
        "city": "Bhangala",
        "ticketprice": 98.6456,
        "releasedate": "1/27/2018",
        "poster": "assets/images/phantom.jpg",
        "movieslist": [
            {
                "title": "The Phantom Slam Evilz",
                "poster": "assets/images/phantom1_tn.jpg"
            }
        ]
    
    }, {
        "sl": 5,
        "title": "Spiderman",
        "gender": "male",
        "firstname": "Peter",
        "lastname": "Parker",
        "city": "New York",
        "ticketprice": 1.3456,
        "releasedate": "9/26/2018",
        "poster": "assets/images/spiderman.jpg",
        "movieslist": [
            {
                "title": "Spiderman",
                "poster": "assets/images/spider1_tn.jpg"
            }, {
                "title": "Spiderman 2",
                "poster": "assets/images/spider2_tn.jpg"
            }, {
                "title": "Spiderman 3",
                "poster": "assets/images/spider3_tn.jpg"
            }
        ]
    },
    {
        "sl": 6,
        "title": "Wonder Women",
        "gender": "female",
        "firstname": "Princess",
        "lastname": "Diana",
        "city": "Amazon",
        "ticketprice": 341.3456978978,
        "releasedate": "11/26/2018",
        "poster": "assets/images/wonderwoman.jpg",
        "movieslist" : []
    }];

}