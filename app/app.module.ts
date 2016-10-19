import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Ng2PaginationModule} from 'ng2-pagination'; //importing ng2-pagination

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component'; //import home components
import { AboutComponent } from './about/about.component'; //import about component
import { routing }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing, Ng2PaginationModule ], //other modules the app depends on
  declarations: [ AppComponent, AboutComponent, HomeComponent ], // declare all derectives and components
  bootstrap : [ AppComponent ] // root component to bootstarp
})
export class AppModule { }