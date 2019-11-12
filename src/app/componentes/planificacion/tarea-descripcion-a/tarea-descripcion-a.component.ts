import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';

import { ApiTareaOperacionDescripcionService } from '../../../servicio/api-tarea-operacion-descripcion.service';
import { ApiEmailService } from '../../../servicio/api-email.service';
import { tareaOperacionDescripcion } from '../../../modelo/tareaOperacionDescripcion';

@Component({
  selector: 'app-tarea-descripcion-a',
  templateUrl: './tarea-descripcion-a.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiTareaOperacionDescripcionService,
    ApiEmailService]
})
export class TareaDescripcionAComponent implements OnInit {
  modelo: tareaOperacionDescripcion;
  ID: string;
  date: Date;

  constructor(
    private _api: ApiTareaOperacionDescripcionService,
    private _apiEmail: ApiEmailService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      
      this.modelo = new tareaOperacionDescripcion(0, id, 0, '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '');
      this.date = new Date();
    });

  }

  ngOnInit() {
  }


  onSubmit() {
    if (this.modelo.DESCRIPCION) {
      this.modelo.USR = localStorage.getItem('_u');

      this.modelo.FECHA_SOLICITUD = moment(Date.now()).format('YYYYMMDD');
      this.modelo.FECHA_SOLICITUD_DESCRIPCION = moment(Date.now()).locale('es').format('LL');

      this._api.Comentario(this.modelo).subscribe(response => {
        this._router.navigate(['/ejecucion/' + this.modelo.TAREA_OPERACION_ID]);
      })
    }
  }

}
