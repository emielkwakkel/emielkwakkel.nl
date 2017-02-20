import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { BlocksService } from "../blocks.service";
import 'rxjs/Rx';
import { Subscription } from "rxjs";

@Component({
  selector: 'ek-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _showSide: boolean;
  private _subscription : Subscription;
  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this._blocksService.onResizeShowSide(event);
  }

  constructor(private _blocksService: BlocksService) {
    this._subscription = this._blocksService
      .changes
      .pluck('showSide')
      .subscribe((showSide: boolean) => this._showSide = showSide);
  }

  setShowSide(showSide) {
    this._blocksService.setShowSide(showSide);
  }

  get showSide() {
    return this._blocksService.showSide;
  }

  ngOnInit() {
    // Show sidebar if width of window if over or equal to 768 pixels.
    this._blocksService.setShowSide(window.innerWidth >= 768);
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this._subscription.unsubscribe();
  }

}
