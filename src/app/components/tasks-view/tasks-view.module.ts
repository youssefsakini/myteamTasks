import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasksViewComponent } from './tasks-view.component';

const route: Routes = [
  {path: 'task', component: TasksViewComponent}
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class TasksViewModule { }
