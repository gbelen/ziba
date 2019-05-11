import { Component, OnInit } from '@angular/core';
import { InfoappService } from 'src/app/services/infoapp.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor( public _servicioInfo: InfoappService ) { }

  ngOnInit() {
  }

}
