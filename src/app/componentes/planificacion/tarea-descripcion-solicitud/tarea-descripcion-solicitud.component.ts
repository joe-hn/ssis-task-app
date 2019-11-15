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
  selector: 'app-tarea-descripcion-solicitud',
  templateUrl: './tarea-descripcion-solicitud.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiTareaOperacionDescripcionService,
    ApiEmailService,
    ApiDireccionService,
    ApiCargoService,
    ApiEmpleadoService]
})
export class TareaDescripcionSolicitudComponent implements OnInit {
  modelo: tareaOperacionDescripcion;
  ID: string;
  date: Date;

  direccionModelo: direccion[];
  cargoModelo: cargo[];
  empleadoModelo: empleado[];
  emplModelo: empleado;

  constructor(
    private _api: ApiTareaOperacionDescripcionService,
    private _apiEmail: ApiEmailService,
    private _apiDireccion: ApiDireccionService,
    private _apiCargo: ApiCargoService,
    private _apiEmpleado: ApiEmpleadoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      
      this.modelo = new tareaOperacionDescripcion(0, id, 0, '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '');
      this.emplModelo = new empleado(0, '', '', '', 0, 0, '', '', '');

      this.date = new Date();
    });

  }

  GET_DIRECCION() {
    this._apiDireccion.Get().subscribe(response => {
      this.direccionModelo = response.modelo;     
    });
  }

 
  onSelectedEmpleado() {
    if (this.emplModelo.DIRECCION_ID) {
      this._apiEmpleado.getDireccion(this.emplModelo.DIRECCION_ID).subscribe(response => {
        this.empleadoModelo = response.modelo;
      });
    }
  }

  ngOnInit() {
    this.GET_DIRECCION();
  }

  onSubmit() {
    if (this.modelo.DESCRIPCION && this.modelo.RESPONSABLE_ID != 0) {

      this.modelo.USR = localStorage.getItem('_u');
      this.modelo.FECHA_SOLICITUD = moment(Date.now()).format('YYYYMMDD');
      this.modelo.FECHA_SOLICITUD_DESCRIPCION = moment(Date.now()).locale('es').format('LL');

      this._api.SolicitudApoyo(this.modelo).subscribe(response => {

        this._api.GetId(response.modelo).subscribe(solicitud => {

          this._apiEmail.Post(solicitud.modelo).subscribe(email => {

            this._router.navigate(['/ejecucion/' + this.modelo.TAREA_OPERACION_ID]);
          });
        });
      });
    };
  }

}
