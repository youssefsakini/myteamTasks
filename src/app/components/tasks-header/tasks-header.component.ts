import { Component } from '@angular/core';
import { TasksItems } from 'src/app/types/TasksItems';

@Component({
  selector: 'app-tasks-header',
  templateUrl: './tasks-header.component.html',
  styleUrls: ['./tasks-header.component.scss']
})
export class TasksHeaderComponent {
  items: TasksItems [] = [
    {
      id: '1',
      name:'Ma journée',
      icone:'fa fa-sun-o'
    },
    {
      id: '2',
      name:'Important',
      icone:'fa fa-star'
    },
    {
      id: '3',
      name:'Planifié',
      icone:'fa fa-calendar-check-o'
    },    {
      id: '4',
      name:'Courrier avec indicateur',
      icone:'fa fa-flag'
    },    {
      id: '5',
      name:'Tâches',
      icone:'fa fa-home'
    },
  ];
}
