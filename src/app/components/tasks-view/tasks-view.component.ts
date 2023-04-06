import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.scss']
})
export class TasksViewComponent {
  isCollapsed = true;
  buttonLabel = 'Terminées';

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
