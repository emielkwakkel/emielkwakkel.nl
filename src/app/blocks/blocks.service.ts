import { Injectable } from '@angular/core';
import { Blocks } from "./blocks";
import { Observable, Subscriber } from "rxjs";

@Injectable()
export class BlocksService {

  constructor(private _blocks : Blocks) { }

  onResizeShowSide(event) : void {
    const innerWidth: number = event.target.innerWidth;

    // Hide side if screen width gets belows
    if(innerWidth < 768 && this._blocks.showSide) {
      this._blocks.showSide = false;
    }

    if (innerWidth >= 768 && !this._blocks.showSide) {
      this._blocks.showSide = true;
    }
  }

  onInitShowSide(width) : void {
    this._blocks.showSide = (width >= 768)
  }

  toggleSide() : void {
    this._blocks.showSide = !this._blocks.showSide;
  }
}
