import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {  task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskForm : FormGroup;
  tasks: task[] = [];
  private taskSubscription: Subscription;

  constructor(private formBuilder: FormBuilder,private taskService: TasksService,private router: Router) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      status: ['Pending', Validators.required]
    });

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

  private generateUniqueId(): number {
    // Generate a random number and ensure its uniqueness
    let newId: number;
    do {
      newId = Math.floor(Math.random() * 1000000); // Example range, adjust as needed
    } while (this.tasks.some(task => task.id === newId));
    return newId;
  }

  onSubmit() {
    if (this.taskForm.valid) {
      // Here, you can handle form submission logic, like saving the task
      const task : task = this.getTaskFromValues(this.taskForm.value);
      // Clear the form after submission
      this.taskForm.reset({
        status: 'Pending'
      });

      this.addTask(task);
      this.returnToMainPage();
    }
  }

  returnToMainPage() {
    this.router.navigate(['main']);
  }




  addTask(task: task) {
    this.taskService.addTask(task);
  }


  getTaskFromValues(values: any): task {
    const newGuid = this.generateUniqueId();
    return new task(newGuid ,values.title,values.description,values.dueDate,values.status);
  }
  

}


