import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";
import { BlocksService } from "../blocks.service";

@Component({
  selector: 'ek-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class MenuComponent {

  constructor(private _router: Router, private _blocksService : BlocksService) {
    // Detect navigation event
    _router.events.subscribe((navigate) => {
      if (navigate instanceof NavigationStart) {
        // On mobile the side should be hidden on click.
        _blocksService.setShowSide(window.innerWidth >= 768);
      }
    });
  }

}
