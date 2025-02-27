import { Component } from '@angular/core';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'popUp';
  constructor(private service:PopupService){


  }
  openPopUp(){
    this.service.openPopUp()
  }
}
