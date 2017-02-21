import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ek-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.scss']
})
export class PercentageComponent implements OnInit {
  @Input() percentage : number;
  @Input() title : string;
  @Input() description : string;

  constructor() { }

  ngOnInit() {
    console.log(this.percentage);

  }

}
