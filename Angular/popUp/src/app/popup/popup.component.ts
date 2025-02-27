import { Component } from '@angular/core';
import { PopupService } from '../popup.service';


@Component({
  selector: 'app-popup',
  standalone: false,
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

  constructor(private service:PopupService){

  }
  closePopUp(){
    this.service.closePopUp();

  }

}
