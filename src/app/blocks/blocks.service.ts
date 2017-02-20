import { Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { State } from "./blocks.interface";

const state: State = {
  showSide: false
};

const store = new BehaviorSubject<State>(state);

@Injector()
export class BlocksService {
  store = store;
  changes = store
    .asObservable()
    .distinctUntilChanged()
    .do(changes => console.log('new state', changes));

  getState() {
    console.log('getState');
    return this.store.value;
  }

  setState(state: State) {
    console.log('setState', state);
    this.store.next(state);
  }

  setShowSide(showSide) {
    console.log('_showSide in blocks', showSide);

    const currentState = this.getState();
    const newState = Object.assign({}, currentState, { showSide });
    console.log(newState);

    this.setState(newState);
  }

  get showSide() {
    return this.store.value.showSide;
  }

  onResizeShowSide(event): void {
    const innerWidth: number = event.target.innerWidth;

    // Hide side if screen width gets belows
    if (innerWidth < 768 && this.showSide) {
      this.setShowSide(false);
    }

    if (innerWidth >= 768 && !this.showSide) {
      this.setShowSide(true);
    }
  }
}
