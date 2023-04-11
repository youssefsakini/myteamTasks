import { Component, ViewChild } from '@angular/core';
import { TasksViewComponent } from './components/tasks-view/tasks-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myteamTasks';
}
