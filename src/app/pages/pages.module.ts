// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TypewriterModule } from "ng2-typewriter";

// Components
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './mission/mission.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'mission', component: MissionComponent },
      { path: 'not-found', component: NotFoundComponent }
    ]),
    TypewriterModule
  ],
  declarations: [AboutComponent, ContactComponent, MissionComponent, HomeComponent, NotFoundComponent]
})
export class PagesModule { }
