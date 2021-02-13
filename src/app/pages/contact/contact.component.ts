import { Component } from '@angular/core';
import { icon, Icon } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public icons: { [key: string]: Icon } = {
    circle: icon({ prefix: 'fas', iconName: 'circle'}),
    comment: icon({ prefix: 'far', iconName: 'comment'}),
    envelope: icon({ prefix: 'fas', iconName: 'envelope'}),
    github: icon({ prefix: 'fab', iconName: 'github'}),
    linkedin: icon({ prefix: 'fab', iconName: 'linkedin'}),
    twitter: icon({ prefix: 'fab', iconName: 'twitter'}),
  };
}
