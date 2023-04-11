import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.scss']
})
export class TasksViewComponent {
  isCollapsed: boolean = true;
  buttonLabel: string = 'Terminées';
  isImportant: boolean = false;
  // showMyTasks = true;
  // showMyDay = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleImportantTask(){
    this.isImportant = !this.isImportant;
  }

  // toggleMyTasks() {
  //   this.showMyTasks = true;
  //   this.showMyDay = false;
  // }

  // toggleMyDay() {
  //   this.showMyTasks = false;
  //   this.showMyDay = true;
  // }
}
