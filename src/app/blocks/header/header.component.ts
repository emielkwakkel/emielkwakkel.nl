import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { BlocksService } from "../blocks.service";
import { Blocks } from "../blocks";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ek-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription : Subscription;
  public showSide: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this._blocksService.onResizeShowSide(event);
  }

  constructor(private _blocksService: BlocksService, private _blocks: Blocks) {
  }

  toggleSideFalse() {
    this.showSide = false;
  }

  ngOnInit() {
    // Show sidebar if width of window if over or equal to 768 pixels.
    this._blocksService.onInitShowSide(window.innerWidth);

    this.subscription = this._blocks.showSide
      .subscribe(item => this.showSide = item);
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  toggleSide(): void {
    this._blocksService.toggleSide();
  }
}
