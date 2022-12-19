import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from "rxjs";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService, private router:Router, public dialog : MatDialog) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }

  toggleAddTask() {
    // this.uiService.toggleAddTask();
    this.dialog.open(AddTaskComponent, {
      height: '405px',
      width: '600px',      
    })
  }

  hasRoute(route:string){
    return this.router.url === route;
  }
}
