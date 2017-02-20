import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class Blocks {
  public _showSide : boolean;

  set showSide(_showSide : boolean) {
    console.log('setting', _showSide);

    this._showSide = _showSide;
  }

  get showSide() : boolean {
    console.log('getting', this._showSide);
    return this._showSide;
  }
}
