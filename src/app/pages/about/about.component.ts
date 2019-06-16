import { Component } from '@angular/core';
import { Skill } from "./skill.interface";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills: Skill[] = [{
    "description": "Teaches AngularJS at Sogeti and works fulltime using Angular",
    "percentage": 85,
    "title": "Angular & AngularJS"
  }, {
    "description": "Getting comfortable on typing all the way.",
    "percentage": 75,
    "title": "TypeScript"
  }, {
    "description": "Uses GIT for versioning within teams.",
    "percentage": 90,
    "title": "GIT"
  }, {
    "description": "Uses Ionic and Cordova for building hybrid web applications",
    "percentage": 80,
    "title": "Ionic & Cordova"
  }];

  constructor() {}
}
