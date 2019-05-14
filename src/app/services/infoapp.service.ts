import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoAppInterface } from '../interfaces/info-app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoappService {

	info: InfoAppInterface = {};
	cargando = true;

	clientes: any[] = [];

	constructor(private http: HttpClient ) { 

		//console.log('Estoy iniciando un servicio para sacar la info del app creado en assets data.');
		this.getInfoApp();
		this.getClientsList();

	}


	private getInfoApp(){
		//Leo el archivo json que cree previamente en assets/data
		this.http.get('assets/data/info-app.json')
			.subscribe( (resp: InfoAppInterface) =>{
				
			this.info = resp;	
			this.cargando = false;
		});
	}
	
	
	//Function que obtiene el listado de clientes en la BD
	private getClientsList(){

		
		this.http.get('https://ziba-70342.firebaseio.com/cliente.json')
			.subscribe( (resp: any[]) =>{
				
				this.clientes = resp;
				//console.log(resp);
		});

	}



}
