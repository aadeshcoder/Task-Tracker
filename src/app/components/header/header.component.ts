import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  constructor () {}

  toggleAddTask() {
    console.log('Toggle Add Class');
  }
}
