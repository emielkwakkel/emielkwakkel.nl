import { Component } from '@angular/core';
import { MenuItem } from './menu.interface';
import { icon } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'ek-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class MenuComponent{
  menuItems: MenuItem[] = [{
    icon: icon({ prefix: 'fas', iconName: 'home'}),
    routerLink: ['/home'],
    text: 'Home'
  }, {
    icon: icon({ prefix: 'far', iconName: 'user-circle'}),
    routerLink: ['/about'],
    text: 'About',
  }, {
    icon: icon({ prefix: 'far', iconName: 'heart'}),
    routerLink: ['/mission'],
    text: 'Mission',
  }, {
    icon: icon({ prefix: 'far', iconName: 'comment'}),
    routerLink: ['/contact'],
    text: 'Contact',
  }];

  constructor() {}
}
