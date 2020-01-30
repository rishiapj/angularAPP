import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: `
  <h2>Master controls {{names.length}} names</h2>
  <app-name-child *ngFor="let name of names" [name]="name"></app-name-child>
  `,
  //templateUrl: './name-parent.component.html',
  styleUrls: ['./name-parent.component.css']
})
export class NameParentComponent implements OnInit {
   // Displays 'Dr IQ', '<no name set>', 'Bombasto'
   names = ['Dr IQ', ' Modi  ', '  Bombasto  ', ' Amit '];
  ngOnInit() {
  }

}
