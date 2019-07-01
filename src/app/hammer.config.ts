import { HammerGestureConfig } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable()
export class HammerConfig extends HammerGestureConfig {
  overrides = <any> {
    'pinch': { enable: false },
    'rotate': { enable: false },
    'swipe': { enable: true, direction: 6 }
  }
}
