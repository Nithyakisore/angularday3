import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-grid',
    template: `<table class=" table  table-striped table-bordered .table-hover">
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
        <tr *ngFor="let hero of heroliste ;index as idx; first as fst;last as lst ;odd as od ;even as evn">
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
    `
})

export class GridComponent{
    @Input('data') heroliste = []


}