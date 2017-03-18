import { Component } from '@angular/core';
import { BlocksService } from "../blocks.service";

@Component({
  selector: 'ek-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private _blocksService: BlocksService) {}

  setShowSide(showSide) {
    this._blocksService.setShowSide(showSide);
  }
}
