import { Component } from '@angular/core';

@Component({
  selector: 'ek-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class MenuComponent{
  menuItems = [{
    "iconClass": "fa-home",
    "routerLink": ["/home"],
    "text": "Home"
  }, {
    "iconClass": "fa-user-circle-o",
    "routerLink": ["/about"],
    "text": "About"
  }, {
    "iconClass": "fa-heart-o",
    "routerLink": ["/mission"],
    "text": "Mission"
  }, {
    "iconClass": "fa-comment-o",
    "routerLink": ["/contact"],
    "text": "Contact"
  }];

  constructor() {}
}
