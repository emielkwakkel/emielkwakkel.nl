// Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

// App modules
import { PagesModule } from './pages/pages.module';
import { BlocksModule } from './blocks/blocks.module';

// Components
import { AppComponent } from './app.component';

// Firebase config not committed to not expose keys, add manually.
import { firebaseConfig } from './firebase.config';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    'pinch': { enable: false },
    'rotate': { enable: false },
    'swipe': { directions: 'DIRECTION_HORIZONTAL'}
  }
}

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
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
