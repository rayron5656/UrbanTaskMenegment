import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { task } from '../models/task.model';


  @Injectable({
    providedIn: 'root'
  })

  export class TasksService {
    public tasks: task[] = [];
    private taskSubject = new Subject<task[]>();
  
    tasks$ = this.taskSubject.asObservable();
  
    constructor() {
      this.loadTasks();
    }
  
    loadTasks() {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        this.tasks = JSON.parse(storedTasks);
        this.taskSubject.next([...this.tasks]); // Emit notification to subscribers
      }
    }
  
    private saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  
    addTask(task: task) {
      this.tasks.push(task);
      this.saveTasks(); // Save tasks to local storage
      this.taskSubject.next([...this.tasks]); // Emit notification to subscribers
    }
  
    updateTask(taskId: number, updatedTask: task) {
      console.log("updateTask");
      const index = this.tasks.findIndex(task => task.id === taskId);
      if (index !== -1) {
        this.tasks[index] = updatedTask;
        this.saveTasks(); // Save tasks to local storage
        this.taskSubject.next([...this.tasks]); // Emit notification to subscribers
      }
    }
  
    deleteTask(taskId: number) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      this.saveTasks(); // Save tasks to local storage
      this.taskSubject.next([...this.tasks]); // Emit notification to subscribers
    }
  }