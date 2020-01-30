import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
  <h4>{{name}}</h4>
  <button (click)="vote(true)"  [disabled]="didVote">Agree</button>
  <button (click)="vote(false)" [disabled]="didVote">Disagree</button>
`,
 // templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  @Input()  name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
