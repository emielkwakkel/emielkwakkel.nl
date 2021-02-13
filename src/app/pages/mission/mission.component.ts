import { Component } from '@angular/core';
import { Icon, icon } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent {
  public icons: { [key: string]: Icon } = {
    heart: icon({ prefix: 'far', iconName: 'heart'}),
    lightbulb: icon({ prefix: 'far', iconName: 'lightbulb'}),
  };
}
