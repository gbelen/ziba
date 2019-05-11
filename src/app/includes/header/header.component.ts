import { Component, OnInit } from '@angular/core';
import { InfoappService } from 'src/app/services/infoapp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public _servicioInfo: InfoappService ) { }

    ngOnInit() {

  }

}
