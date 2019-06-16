import { Component } from '@angular/core';

@Component({
  selector: 'ek-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class MenuComponent{
  menuItems = [{
    icon: ['fas', 'home'],
    routerLink: ['/home'],
    text: 'Home'
  }, {
    icon: ['far', 'user-circle'],
    routerLink: ['/about'],
    text: 'About',
  }, {
    icon: ['far', 'heart'],
    routerLink: ['/mission'],
    text: 'Mission',
  }, {
    icon: ['far', 'comment'],
    routerLink: ['/contact'],
    text: 'Contact',
  }];

  constructor() {}
}
