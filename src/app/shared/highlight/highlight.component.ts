import { Component, Input } from '@angular/core';

@Component({
  selector: 'ek-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent {
  @Input() icon : string;
}
