import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ek-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit {
  @Input() icon : string;
  ngOnInit() {
    console.log('icon', this.icon)
  }
}
