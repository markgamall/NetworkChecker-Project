import { Component } from '@angular/core';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public popupData:PopupService){}
  title = 'NetworkChecker';
}
