import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';

import { ApiTareaOperacionDescripcionService } from '../../../servicio/api-tarea-operacion-descripcion.service';
import { ApiDireccionService } from '../../../servicio/api-direccion.service';
import { ApiCargoService } from '../../../servicio/api-cargo.service';
import { ApiEmpleadoService } from '../../../servicio/api-empleado.service';

import { ApiEmailService } from '../../../servicio/api-email.service';
import { tareaOperacionDescripcion } from '../../../modelo/tareaOperacionDescripcion';
import { direccion } from '../../../modelo/direccion';
import { cargo } from '../../../modelo/cargo';
import { empleado } from '../../../modelo/empleado';

@Component({
  selector: 'app-tarea-solicitud',
  templateUrl: './tarea-solicitud.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiTareaOperacionDescripcionService,
    ApiEmailService,
    ApiDireccionService,
    ApiCargoService,
    ApiEmpleadoService]
})
export class TareaSolicitudComponent implements OnInit {
  modelo: tareaOperacionDescripcion;

  constructor(
    private _api: ApiTareaOperacionDescripcionService,
    private _apiEmail: ApiEmailService,
    private _apiDireccion: ApiDireccionService,
    private _apiCargo: ApiCargoService,
    private _apiEmpleado: ApiEmpleadoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new tareaOperacionDescripcion(0, 0, 0, '', 1, '', '', '', '', '', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._api.GetSolicitud(id).subscribe(response => {
        this.modelo = response.modelo;
      });
    })
  }

  onSubmit() {
    if (this.modelo.RESPUESTA_DES) {

      this.modelo.FECHA_RESPUESTA = moment(Date.now()).format('YYYYMMDD');
      this.modelo.FECHA_RESPUESTA_DESCRIPCION = moment(Date.now()).locale('es').format('LL');
      this.modelo.RESPUESTA = this.modelo.RESPUESTA_DES;

      this._api.SolicitudApoyoRespuesta(this.modelo.ID, this.modelo).subscribe(response => {
        this._router.navigate(['/tarea-salida/']);
      });
    }
  }

}
