import { Component, OnDestroy } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
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

  constructor(private _firebase: AngularFirestore) {
    // this.subscribe = _firebase.database
    //   .list('/skills')
    //   .subscribe(skills => {
    //     this.loading = false;
    //     this.skills = skills;
    //   });
  }

  ngOnDestroy() {
    // this.subscribe.unsubscribe();
  }
}
