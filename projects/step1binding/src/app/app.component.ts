import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Binding 101</h1>
  <input #ti1 (input)="title = ti1.value" [value] = "title" type = "text">
  <input [(ngModel)] = "title" type = "text">
  <hr>
  <input [(ngModel)] = "box" type = "text">
   <div [class] = box> </div>
  <div [ngClass]="[box]"></div>
  <h2>{{title}} </h2>
  <input [(ngModel)]="agree" type="checkbox">
  <div [class.bdr]="agree">
    <h2>Welcome to your life</h2>
  </div>

  <hr>
  <input [(ngModel)]="color" type="text">
  <h1 [style.background-color]="color">Hello Citibank</h1>
  <h1 [ngStyle]="{'color':'white','background-color':'blue'}">Hello Citibank</h1>
  `,

  

  styles : [`
  
  .bdr{
    border : 10px dotted red;
  }

  .orangeBox{
    width : 200px;
    height : 200px;
    background-color : orange;
    margin : auto;
  }
  .greenBox{
    width : 200px;
    height : 200px;
    background-color : green;
    margin : auto;
  }
  .silverBox{
    width : 200px;
    height : 200px;
    background-color : silver;
    margin : auto;
  }
  `]

})
export class AppComponent {
  title = 'step1binding';
  box ='orangeBox'
  color = 'pink';
  agree = true;
}
