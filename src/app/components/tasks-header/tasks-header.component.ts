import { Component, EventEmitter, Output } from '@angular/core';
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
      icone:'fa fa-sun-o',
      link: '/tasks'
    },
    {
      id: '2',
      name:'Important',
      icone:'fa fa-star-o',
      link: ''
    },
    {
      id: '3',
      name:'Planifié',
      icone:'fa fa-calendar-check-o',
      link: ''
    },    {
      id: '4',
      name:'Courrier avec indicateur',
      icone:'fa fa-flag-o',
      link: ''
    },    {
      id: '5',
      name:'Tâches',
      icone:'fa fa-home',
      link: ''
    },    {
      id: '6',
      name:'Affectées à moi',
      icone:'fa fa-user-o',
      link: ''
    },
      {
      id: '7',
      name:'Nouvelle liste',
      icone:'fa fa-list',
      link: ''
    }, 
    
  ];
}
