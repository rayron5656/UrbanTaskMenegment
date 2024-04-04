import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { TasksService } from './services/tasks.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDeleteDialogComponent } from './components/confirm-delete-dialog/confirm-delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TaskCardComponent,
    TaskListComponent,
    MainPageComponent,
    UpdateTaskComponent,
    ConfirmDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
