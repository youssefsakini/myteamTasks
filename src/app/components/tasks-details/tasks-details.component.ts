import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper/helper.service';
import { MainPopupService } from 'src/app/services/main-popup/main-popup.service';
import { TasksItems } from 'src/app/types/TasksItems';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.scss']
})
export class TasksDetailsComponent {
  rappelItems: TasksItems [] = [
    {
      id: '01',
      name: 'Rappel',
      icone: 'fa fa-bell'
    },
    {
      id: '02',
      name: "Ajouter une date d'échéance",
      icone: 'fa fa-calendar'
    },
    {
      id: '03',
      name: 'Répéter',
      icone: 'fa fa-refresh'
    }
  ];
  showMenu: boolean = true;
  inputText: string = '';
  toggleBtn: boolean = false;
  showModal: boolean = false;
  // Id's PopUps
  idRappel: string = '01';
  idEcheance: string = '02';
  idRepeter: string = '03';

  //Height
  rappelHeight: string = "74%"
  echeanceHeight: string = "74%"

  constructor(private help:HelperService, private mainPopupService: MainPopupService){}

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.help.toggleMenu(this.showMenu)
  }

  toggleAddBtn(){
    this.toggleBtn = !!this.inputText;
  }

  openPopupRappel() {
    this.mainPopupService.open(this.idRappel);
    console.log('inside rappel open popup');
  }
  openPopupEcheance() {
    this.mainPopupService.open(this.idEcheance);
    console.log('inside echeance open popup');
  }
  openPopupRepeter() {
    this.mainPopupService.open(this.idRepeter);
    console.log('inside repeter open popup');
  }
}
