import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  toggleMenu(showMenu: boolean) {
     showMenu = !showMenu;
  }
}
