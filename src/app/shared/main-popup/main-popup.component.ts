import { Component, Input } from '@angular/core';
import { MainPopupService } from 'src/app/services/main-popup/main-popup.service';

@Component({
  selector: 'app-main-popup',
  templateUrl: './main-popup.component.html',
  styleUrls: ['./main-popup.component.scss']
})
export class MainPopupComponent {
  @Input() closeBtn: boolean = true
  @Input() id: string = 'mainPopUp'
  @Input() customHeight!: string;
  @Input() customWidth!: string;

  constructor(private mainPopupService: MainPopupService) { }

  closeModal() {
    this.mainPopupService.close(this.id);
  }
}
