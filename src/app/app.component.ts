import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  CompleteProgressbars,
  startProgressbars,
} from './store/actions/progressbar.actions';
import { ProgressbarState } from './store/reducers/progressbar.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-ngx-progressbar';
  copyright$: Observable<Date> = of(new Date());

  constructor(private pbStore: Store<ProgressbarState>) {}

  ngOnInit(): void {}

  startProgressbar = ($event: any) =>
    this.pbStore.dispatch(startProgressbars());
  completeProgressbar = ($event: any) =>
    this.pbStore.dispatch(CompleteProgressbars());
}
