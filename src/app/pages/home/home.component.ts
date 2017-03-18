import { Component, OnInit } from '@angular/core';
import { TypewriterService, TypewriterContent } from "ng2-typewriter";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TypewriterService]
})
export class HomeComponent implements OnInit {
  public contents: TypewriterContent[];

  constructor(private _typewriterService: TypewriterService) {
    this.contents = this._typewriterService.format([
      'TypeScript',
      'Maureen',
      'Angular 2',
      'Amazon Echo',
      'Innovation',
      'HTML & (S)CSS',
      'JavaScript',
      'Ionic & Cordova',
      'Agile & Scrum',
      'Arduino',
      'Joomla',
      'Raspberry Pi']);
  }

  ngOnInit() {
  }
}
