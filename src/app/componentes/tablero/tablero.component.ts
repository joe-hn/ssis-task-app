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

  tareaRoja_noIniciada: tareaOperacion[];
  tareaRoja_ejecucion: tareaOperacion[];

  tareaAmarilla_noIniciada: tareaOperacion[];
  tareaAmarilla_ejecucion: tareaOperacion[];

  tareaVerde_noIniciada: tareaOperacion[];
  tareaVerde_ejecucion: tareaOperacion[];


  constructor(
    private _api: ApiTareaOperacionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

  }

  ngOnInit() {

    this.usuarioModelo = JSON.parse(localStorage.getItem('_user'));

    if (this.usuarioModelo.JEFE) {
      this._api.GetTareaDireccion(this.usuarioModelo.DIRECCION_ID).subscribe(response => {
        this.tareaModelo = response.modelo;

        this.tareaRoja_noIniciada = this.tareaModelo.filter(c => c.ESTADO == 'NO INICIADA' && c.ALERTA_ESTIMADO == 'ROJO');
        this.tareaRoja_ejecucion = this.tareaModelo.filter(c => c.ESTADO == 'EN EJECUCION' && c.ALERTA == 'ROJO');

        this.tareaAmarilla_ejecucion = this.tareaModelo.filter(c => c.ESTADO == 'EN EJECUCION' && c.ALERTA == 'AMARILLO');
        this.tareaAmarilla_noIniciada = this.tareaModelo.filter(c => c.ESTADO == 'NO INICIADA' && c.ALERTA_ESTIMADO == 'AMARILLO');

        this.tareaVerde_ejecucion = this.tareaModelo.filter(c => c.ESTADO == 'EN EJECUCION' && c.ALERTA == 'VERDE');
        this.tareaVerde_noIniciada = this.tareaModelo.filter(c => c.ESTADO == 'NO INICIADA' && c.ALERTA_ESTIMADO == 'VERDE');

      });
    } else {
      this._api.GetTareaResponsable(this.usuarioModelo.ID).subscribe(response => {
        this.tareaModelo = response.modelo;

        this.tareaRoja_noIniciada = this.tareaModelo.filter(c => c.ESTADO == 'NO INICIADA' && c.ALERTA_ESTIMADO == 'ROJO');
        this.tareaRoja_ejecucion = this.tareaModelo.filter(c => c.ESTADO == 'EN EJECUCION' && c.ALERTA == 'ROJO');

        this.tareaAmarilla_ejecucion = this.tareaModelo.filter(c => c.ESTADO == 'EN EJECUCION' && c.ALERTA == 'AMARILLO');
        this.tareaAmarilla_noIniciada = this.tareaModelo.filter(c => c.ESTADO == 'NO INICIADA' && c.ALERTA_ESTIMADO == 'AMARILLO');

        this.tareaVerde_ejecucion = this.tareaModelo.filter(c => c.ESTADO == 'EN EJECUCION' && c.ALERTA == 'VERDE');
        this.tareaVerde_noIniciada = this.tareaModelo.filter(c => c.ESTADO == 'NO INICIADA' && c.ALERTA_ESTIMADO == 'VERDE');

      });
    }

  }

}
