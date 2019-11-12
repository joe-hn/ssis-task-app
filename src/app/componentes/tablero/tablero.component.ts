import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiTareaOperacionService } from '../../servicio/api-tarea-operacion.service';

import { tareaOperacion } from '../../modelo/tareaOperacion';
import { usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['../../estilos/angular-material.css'],
  providers: [ApiTareaOperacionService]
})
export class TableroComponent implements OnInit {
  usuarioModelo: usuario;
  tareaModelo: tareaOperacion[];
  tareaPendienteModelo: tareaOperacion[]; 
  tareaEjecucionModelo: tareaOperacion[]; 
  tareaReplanificadaModelo: tareaOperacion[];

  constructor(
    private _api: ApiTareaOperacionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.usuarioModelo = JSON.parse(localStorage.getItem('_user'));    
  }

  ngOnInit() {

    if (this.usuarioModelo.JEFE_MARCA) {
      this._api.GetTareaDireccion(this.usuarioModelo.DIRECCION_ID).subscribe(response => {
        this.tareaModelo = response.modelo;   

        console.log('JEFE', this.tareaModelo);
        
        this.tareaPendienteModelo = this.tareaModelo.filter(c=> c.ESTADO == 'NO INICIADA');
        this.tareaEjecucionModelo = this.tareaModelo.filter(c=> c.ESTADO == 'EN EJECUCION');    
        this.tareaReplanificadaModelo = this.tareaModelo.filter(c=> c.ESTADO == 'REPLANIFICADA');
       
      });
    } else {
      this._api.GetTareaResponsable(this.usuarioModelo.ID).subscribe(response => {
        this.tareaModelo = response.modelo;        

        console.log('OFICIAL', this.tareaModelo);

        this.tareaPendienteModelo = this.tareaModelo.filter(c=> c.ESTADO == 'NO INICIADA');
        this.tareaEjecucionModelo = this.tareaModelo.filter(c=> c.ESTADO == 'EN EJECUCION');     
        this.tareaReplanificadaModelo = this.tareaModelo.filter(c=> c.ESTADO == 'REPLANIFICADA');   
      
      });
    }
 
  }

}
