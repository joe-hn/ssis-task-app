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
  
  tareapendienteverde: tareaOperacion[];
  tareapendienteamarillo: tareaOperacion[];
  tareapendienterojo: tareaOperacion[];

  tareaejecucionverde: tareaOperacion[];
  tareaejecucionamarillo: tareaOperacion[];
  tareaejecucionrojo: tareaOperacion[];

  tareaefinalizadanverde: tareaOperacion[];
  tareafinalizadaamarillo: tareaOperacion[];
  tareafinalizadarojo: tareaOperacion[];

  tareacanclada: tareaOperacion[];

  constructor(
    private _api: ApiTareaOperacionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.usuarioModelo = JSON.parse(localStorage.getItem('_user'));    
  }

  ngOnInit() {
    if (this.usuarioModelo.JEFE) {
      this._api.GetTareaDireccion(this.usuarioModelo.DIRECCION_ID).subscribe(response => {
        this.tareaModelo = response.modelo;                

        this.tareapendienteverde = this.tareaModelo.filter(c=> c.ESTADO == 'NO INICIADA' && c.ALERTA_ESTIMADO == 'VERDE');
        this.tareapendienteamarillo = this.tareaModelo.filter(c=> c.ESTADO == 'NO INICIADA' && c.ALERTA_ESTIMADO == 'AMARILLO');
        this.tareapendienterojo = this.tareaModelo.filter(c=> c.ESTADO == 'NO INICIADA' && c.ALERTA_ESTIMADO == 'ROJO');

        this.tareaejecucionverde = this.tareaModelo.filter(c=> c.ESTADO == 'EN EJECUCION' && c.ALERTA == 'VERDE');
        this.tareaejecucionamarillo = this.tareaModelo.filter(c=> c.ESTADO == 'EN EJECUCION' && c.ALERTA == 'AMARILLO');
        this.tareaejecucionrojo = this.tareaModelo.filter(c=> c.ESTADO == 'EN EJECUCION' && c.ALERTA == 'ROJO');

        this.tareaefinalizadanverde = this.tareaModelo.filter(c=> c.ESTADO == 'COMPLETADA' && c.ALERTA_FINAL == 'VERDE');
        this.tareafinalizadaamarillo = this.tareaModelo.filter(c=> c.ESTADO == 'COMPLETADA' && c.ALERTA_FINAL == 'AMARILLO');
        this.tareafinalizadarojo = this.tareaModelo.filter(c=> c.ESTADO == 'COMPLETADA' && c.ALERTA_FINAL == 'ROJO');
        
        this.tareacanclada = this.tareaModelo.filter(c=> c.ESTADO == 'CANCELADA');
       
      });
    } else {
      this._api.GetTareaResponsable(this.usuarioModelo.ID).subscribe(response => {
        this.tareaModelo = response.modelo;        

        this.tareapendienteverde = this.tareaModelo.filter(c=> c.ESTADO == 'NO INICIADA' && c.ALERTA_ESTIMADO == 'VERDE');
        this.tareapendienteamarillo = this.tareaModelo.filter(c=> c.ESTADO == 'NO INICIADA' && c.ALERTA_ESTIMADO == 'AMARILLO');
        this.tareapendienterojo = this.tareaModelo.filter(c=> c.ESTADO == 'NO INICIADA' && c.ALERTA_ESTIMADO == 'ROJO');

        this.tareaejecucionverde = this.tareaModelo.filter(c=> c.ESTADO == 'EN EJECUCION' && c.ALERTA == 'VERDE');
        this.tareaejecucionamarillo = this.tareaModelo.filter(c=> c.ESTADO == 'EN EJECUCION' && c.ALERTA == 'AMARILLO');
        this.tareaejecucionrojo = this.tareaModelo.filter(c=> c.ESTADO == 'EN EJECUCION' && c.ALERTA == 'ROJO');

        this.tareaefinalizadanverde = this.tareaModelo.filter(c=> c.ESTADO == 'COMPLETADA' && c.ALERTA_FINAL == 'VERDE');
        this.tareafinalizadaamarillo = this.tareaModelo.filter(c=> c.ESTADO == 'COMPLETADA' && c.ALERTA_FINAL == 'AMARILLO');
        this.tareafinalizadarojo = this.tareaModelo.filter(c=> c.ESTADO == 'COMPLETADA' && c.ALERTA_FINAL == 'ROJO');

        this.tareacanclada = this.tareaModelo.filter(c=> c.ESTADO == 'CANCELADA');
      
      });
    }
 
  }

}
