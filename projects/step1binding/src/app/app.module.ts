import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Thirdcomponent } from './third.component';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header.component';
import { GridComponent } from './grid.component';
import { HeroService } from './hero.service';

//import { AppComponent } from './app.component';
//import { ComaliComponent } from './comali.component';


@NgModule({
  declarations: [
    
    MainComponent,HeaderComponent,GridComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [HeroService],
  bootstrap: [MainComponent]
})
export class AppModule { }
