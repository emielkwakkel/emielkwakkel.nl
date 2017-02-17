// Import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { RouterModule } from "@angular/router";
import { PagesModule } from "./pages/pages.module";

// Import components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './blocks/main/main.component';
import { HeaderComponent } from './blocks/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'notfound'},
    ]),
    FormsModule,
    HttpModule,
    PagesModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
