import { Component } from '@angular/core';
import { task } from './models/task.model';
import { taskStatus } from './models/taskStatus.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'UrbanTaskManager';
 
}