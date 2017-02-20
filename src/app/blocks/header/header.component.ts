import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { BlocksService } from "../blocks.service";
import 'rxjs/Rx';

@Component({
  selector: 'ek-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private _showSide: boolean;

  // @HostListener('window:resize', ['$event'])
  // onResize(event): void {
  //   this._blocksService.onResizeShowSide(event);
  // }

  constructor(private _blocksService: BlocksService) {
    this._blocksService
      .changes
      .pluck('showSide')
      .subscribe((showSide: boolean) => this._showSide = showSide);
  }

  setShowSide(showSide) {
    console.log('_showSide', showSide);

    const currentState = this._blocksService.getState();
    const newState = Object.assign({}, currentState, { showSide });
    console.log(newState);

    this._blocksService.setState(newState);
  }

  get showSide() {
    return this._showSide;
  }

  // setShowSide(_showSide) {
  //   this._blocksService.setShowSide(_showSide)
  // }
  //
  // ngOnInit() {
  //   // Show sidebar if width of window if over or equal to 768 pixels.
  //   this._blocksService.onInitShowSide(window.innerWidth);
  //
  //   this.subscription = this._blocksService.showSide
  //     .subscribe(item => {
  //       console.log('subscribe', item);
  //
  //       this.showSide = item
  //     });
  // }
  //
  // ngOnDestroy() {
  //   // prevent memory leak when component is destroyed
  //   this.subscription.unsubscribe();
  // }
  //
  // toggleSide(): void {
  //   this._blocksService.toggleSide();
  // }
}
