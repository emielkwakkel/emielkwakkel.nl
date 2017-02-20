import "core-js/client/shim"; // or load it before other angular2 & zone.js stuff
import "zone.js";
import "reflect-metadata";

// Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { RouterModule } from "@angular/router";

// App modules
import { PagesModule } from "./pages/pages.module";
import { BlocksModule } from "./blocks/blocks.module";

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'not-found'},
    ]),
    FormsModule,
    HttpModule,
    PagesModule,
    BlocksModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
