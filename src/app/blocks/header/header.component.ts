import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'ek-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showSide : boolean;
  @HostListener('window:resize', ['$event'])
  onResize(event) : void {
    const innerWidth: number = event.target.innerWidth;

    // Hide side if screen width gets belows
    if(innerWidth < 768 && this.showSide) {
      this.showSide = false;
    }

    if (innerWidth >= 768 && !this.showSide) {
      this.showSide = true;
    }
  }

  constructor() { }

  ngOnInit() {
    // Show sidebar if width of window if over or equal to 768 pixels.
    this.showSide = (window.innerWidth >= 768);
  }

  toggleSide() : void {
    this.showSide = !this.showSide;
  }
}
