import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialogue:MatDialog) { }

  openPopUp(){
    this.dialogue.open(PopupComponent,{width:"500px",height:"400px"});
  }

  closePopUp(){
    this.dialogue.closeAll();
  }
}
