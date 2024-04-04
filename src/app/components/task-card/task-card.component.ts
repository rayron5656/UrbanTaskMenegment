import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {
  @Input() task: any;
  @Input() childDeleteFunction!: (taskId: number) => void;

  constructor(private router: Router,private dialog: MatDialog,private taskService : TasksService) { }

  callParentDialog(taskId: number) {
    console.log(taskId);
    this.childDeleteFunction(taskId);
  }


  ngOnInit(): void {
  }

  onEdit(id : string){
    this.router.navigate([`main/${id}`]);
  }
}
