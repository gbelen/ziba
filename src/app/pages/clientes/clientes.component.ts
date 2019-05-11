import { Component, OnInit } from '@angular/core';
import { InfoappService } from 'src/app/services/infoapp.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.sass']
})
export class ClientesComponent implements OnInit {

	constructor( public _servicioClientes: InfoappService) {
		
	}

  ngOnInit() {
  }

}
