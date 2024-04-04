
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  debounceTime } from 'rxjs';
import { task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  @Input() task!: task;
  taskForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router,private taskService: TasksService) {
   
   }

   ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title: [this.task.title, Validators.required],
      description: [this.task.description,Validators.required],
      dueDate: [this.task.dueDate, Validators.required],
      status: [this.task.status, Validators.required]
    });
  
    
    this.taskForm.addControl('saveButton', this.formBuilder.control({ disabled: true }));
    
    this.taskForm.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(() => {
      if (this.taskForm.valid) {
        this.taskForm.get('saveButton')?.enable();
      } else {
        this.taskForm.get('saveButton')?.disable();
      }
    });
    
  }

  onSubmit() {
    if (this.taskForm.valid) {
      // Here, you can handle form submission logic, like saving the task
      const task : task = this.getTaskFromValues(this.taskForm.value);
      // Clear the form after submission
      this.taskForm.reset({
        status: 'Pending'
      });

      this.updateTask(task);
      this.router.navigate(['/']);
    }
  }

  updateTask(task: task) {
    this.taskService.updateTask(task.id,task);
  }

  getTaskFromValues(values: any): task {
    return new task(this.task.id ,values.title,values.description,values.dueDate,values.status);
  }

  onCancel() {
    this.router.navigate(['/']);
  }

}
