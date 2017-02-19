import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Observable";

@Injectable()
export class Blocks {
  public _showSide = new BehaviorSubject<boolean>(false);

  set showSide(_showSide) {
    this._showSide = _showSide;
    console.log('setting', this._showSide);
  }

  get showSide() : Observable<boolean> {
    console.log('getting', this._showSide);

    return this._showSide;
  }
}
