import {Component, ViewChild, ElementRef} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('clickedDiv', [
      state('start', style({
        backgroundColor: 'lightgreen',
        width: '150px',
        height: '150px',
      })),
      state('end', style({
        backgroundColor: 'lightblue',
        width: '300px',
        height: '300px'
      })),
      transition('start <=> end', animate('0.4s 0s ease-in'))
    ])
  ],
})

export class AppComponent {
  clickedDivStart = 'start'

  changeState() {
    this.clickedDivStart === 'start' ? this.clickedDivStart = 'end' : this.clickedDivStart = 'start'
  }
}
