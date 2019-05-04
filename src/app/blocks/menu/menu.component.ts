import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from "@angular/router";
import { BlocksService } from "../blocks.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { Subscription, Observable } from "rxjs";
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'ek-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  // menuItems: FirebaseListObservable<MenuItem[]>;
  menuItems: Observable<any[]>;
  subscribe: Subscription;
  loading: boolean = true;

  constructor(
    private _router: Router,
    private _blocksService : BlocksService,
    private _activatedRoute: ActivatedRoute,
    private _firebase: AngularFirestore) {
  }

  ngOnInit() {
    // Detect navigation event
    // this._router.events
    //   .filter(event => event instanceof NavigationStart)
    //   .map(() => this._activatedRoute)
    //   .subscribe(navigate => {
    //     console.log(this._router.events.subscribe(), navigate);
    //     // On mobile the side should be hidden on click.
    //     this._blocksService.setShowSide(window.innerWidth >= 768);
    // });

    // this.subscribe = this._firebase.db
    //   .list('/menu-items')
    //   .subscribe(items => {
    //     this.loading = false;
    //     this.menuItems = items;
    //   });
  }

  ngOnDestroy() {
    // this.subscribe.unsubscribe();
  }
}
