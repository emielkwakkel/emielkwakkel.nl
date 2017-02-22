import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";
import { BlocksService } from "../blocks.service";
import { MenuItem } from "./menu.interface";
import { FirebaseListObservable, AngularFire } from "angularfire2";
import { Subscription } from "rxjs";

@Component({
  selector: 'ek-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnDestroy {
  // menuItems: FirebaseListObservable<MenuItem[]>;
  menuItems: any;
  subscribe: Subscription;

  constructor(
    private _router: Router,
    private _blocksService : BlocksService,
    private _firebase : AngularFire) {
    // Detect navigation event
    _router.events.subscribe((navigate) => {
      if (navigate instanceof NavigationStart) {
        // On mobile the side should be hidden on click.
        _blocksService.setShowSide(window.innerWidth >= 768);
      }
    });

    this.subscribe = _firebase.database
      .list('/menu-items')
      .subscribe(items => this.menuItems = items);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
