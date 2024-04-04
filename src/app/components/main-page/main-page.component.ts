import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  
  tasks: task[] = [];
  private taskSubscription: Subscription;

  constructor(private taskService : TasksService,private router: Router) {
    this.taskSubscription = this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
    this.taskService.loadTasks();
   }


  ngOnInit() {
  }

  ngOnDestroy() {
    this.taskSubscription.unsubscribe();
  }


  




  


  routeToCreate() {
    this.router.navigate(['/create']);
  }


}
