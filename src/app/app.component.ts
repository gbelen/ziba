import { Component } from '@angular/core';
import { InfoappService } from './services/infoapp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ziba';

  constructor( public InfoappService: InfoappService){
    
  }
}
