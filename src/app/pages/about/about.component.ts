import { Component, OnDestroy } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2";
import { Subscription } from "rxjs";
import { Skill } from "./skill.interface";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnDestroy {
  // skills: FirebaseListObservable<Skill[]>;
  skills: any;
  subscribe: Subscription;
  loading: boolean = true;

  constructor(private _firebase : AngularFire) {
    this.subscribe = _firebase.database
      .list('/skills')
      .subscribe(skills => {
        this.loading = false;
        this.skills = skills;
      });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
