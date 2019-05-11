import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoAppInterface } from '../interfaces/info-app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoappService {

	info: InfoAppInterface = {};
	loaded = false;

	constructor(private http: HttpClient ) { 

		//console.log('Estoy iniciando un servicio para sacar la info del app creado en assets data.');

		//Leo el archivo json que cree previamente en assets/data
		this.http.get('assets/data/info-app.json')
			.subscribe( (resp: InfoAppInterface) =>{
				this.loaded = true; //
				this.info = resp;
				console.log(resp);
		})

	}
}
