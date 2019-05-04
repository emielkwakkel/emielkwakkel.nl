// Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AngularFireModule, } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

// App modules
import { PagesModule } from './pages/pages.module';
import { BlocksModule } from './blocks/blocks.module';

// Components
import { AppComponent } from './app.component';

// Configs
import { firebaseConfig } from './firebase.config';
import { HammerConfig } from './hammer.config'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'not-found' },
    ]),
    FormsModule,
    HttpClientModule,
    PagesModule,
    BlocksModule,
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    AngularFirestore,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
