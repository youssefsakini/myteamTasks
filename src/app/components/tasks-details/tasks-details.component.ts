import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper/helper.service';
import { MainPopupService } from 'src/app/services/main-popup/main-popup.service';
import { Categories } from 'src/app/types/Categories';
import { TasksItems } from 'src/app/types/TasksItems';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.scss'],
})
export class TasksDetailsComponent {
  rappelItems: TasksItems[] = [
    {
      id: '01',
      name: 'Rappel',
      icone: 'fa fa-bell',
    },
    {
      id: '02',
      name: "Ajouter une date d'échéance",
      icone: 'fa fa-calendar',
    },
    {
      id: '03',
      name: 'Répéter',
      icone: 'fa fa-refresh',
    },
  ];
  categories: Categories[] = [
    {
      id: 1,
      name: 'Green category',
      color: '#00b09b',
    },
    {
      id: 2,
      name: 'Blue category',
      color: '#302b63',
    },
    {
      id: 3,
      name: 'Purple category',
      color: '#800080',
    },
    {
      id: 4,
      name: 'Orange category',
      color: '#fc4a1a',
    },
    {
      id: 5,
      name: 'Yellow category',
      color: '#cac531',
    },
    {
      id: 6,
      name: 'Red category',
      color: '#b20a2c',
    },
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
  rappelHeight: string = '74%';
  echeanceHeight: string = '74%';

  constructor(
    private help: HelperService,
    private mainPopupService: MainPopupService
  ) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.help.toggleMenu(this.showMenu);
    let box = document.getElementById('tasks_details_container')
        box?.classList.add('visuallyhidden');
        setTimeout(() => {
          box?.classList.add('hidden');
        }, 1000);
  }

  toggleAddBtn() {
    this.toggleBtn = !!this.inputText;
  }

  openPopup() {
    this.mainPopupService.open('mainPopUp');
  }
  openPopupRappel() {
    this.mainPopupService.open(this.idRappel);
  }
  openPopupEcheance() {
    this.mainPopupService.open(this.idEcheance);
  }
  openPopupRepeter() {
    this.mainPopupService.open(this.idRepeter);
  }
}
