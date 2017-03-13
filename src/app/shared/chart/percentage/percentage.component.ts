import { Component, Input } from '@angular/core';

@Component({
  selector: 'ek-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.scss']
})
export class PercentageComponent {
  @Input() percentage : number;
  @Input() title : string;
  @Input() description : string;
}
