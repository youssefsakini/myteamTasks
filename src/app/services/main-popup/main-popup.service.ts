import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainPopupService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

    // Open the popup
    open(id: string = 'mainPopUp') {
      let mainPopUp = this.document.getElementById(id); // Get popup from the DOM by id
      mainPopUp?.classList.add('open'); // Open it by add open class to the selected popup element
    }
  
    // Close the popup
    close(id: string = 'mainPopUp') {
      let mainPopUp = this.document.getElementById(id); // Get popup from the DOM by id
      mainPopUp?.classList.remove('open'); // Close it by removing open class to the selected popup element
    }
}
