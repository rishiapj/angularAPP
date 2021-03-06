import { Component, OnInit,AfterViewInit, ViewChild  } from '@angular/core';
import { CountdownTimerComponent }  from '../countdown-timer/countdown-timer.component';

export class CountdownLocalVarParentComponent { }

@Component({
  selector: 'app-countdown-parent',
  //templateUrl: './countdown-parent.component.html',
  template: `
  <h3>Countdown to Liftoff (via ViewChild)</h3>
  <button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <div class="seconds">{{ seconds() }}</div>
  <app-countdown-timer></app-countdown-timer>
  `,
  styleUrls: ['./countdown-parent.component.css']
})
export class CountdownParentComponent implements AfterViewInit {

  @ViewChild(CountdownTimerComponent, {static: false})
  private timerComponent: CountdownTimerComponent;

  seconds() { return 0; }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
  constructor() { }

  ngOnInit() {
  }

}
