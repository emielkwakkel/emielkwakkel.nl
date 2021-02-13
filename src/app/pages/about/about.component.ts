import { Component } from '@angular/core';
import { Skill } from "./skill.interface";
import * as moment from 'moment';
import { Icon, icon } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public icons: { [key: string]: Icon } = {
    userCircle: icon({ prefix: 'far', iconName: 'user-circle'}),
    infoCircle: icon({ prefix: 'fas', iconName: 'info-circle'}),
    code: icon({ prefix: 'fas', iconName: 'code'}),
    exclamationTriangle: icon({ prefix: 'fas', iconName: 'exclamation-triangle'}),
  };
  age: number = moment().diff('1989-02-01T00:00:00.000Z', 'years');
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
