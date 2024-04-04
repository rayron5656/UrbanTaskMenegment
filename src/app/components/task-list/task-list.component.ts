import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: any;
  currentTaskID: any;
  

  constructor(private route: ActivatedRoute,private dialog: MatDialog,private taskService: TasksService) {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.currentTaskID = params.get('id');
    });
   }

  ngOnInit(): void {
  }

  deleteTask(taskId: number) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        // User confirmed deletion, delete the task
        this.taskService.deleteTask(taskId);
      }
    });
  }

  

}
