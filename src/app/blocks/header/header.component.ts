import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ek-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showSide : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleSide() : void {
    this.showSide = !this.showSide;
  }

}
