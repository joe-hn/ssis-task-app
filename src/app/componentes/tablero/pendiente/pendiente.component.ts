import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';

import { ApiTareaOperacionService } from '../../../servicio/api-tarea-operacion.service';

import { tareaOperacion } from '../../../modelo/tareaOperacion';

@Component({
  selector: 'app-pendiente',
  templateUrl: './pendiente.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiTareaOperacionService]
})
export class PendienteComponent implements OnInit {
  modelo: tareaOperacion;
  date: Date;

  constructor(
    private _api: ApiTareaOperacionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new tareaOperacion(0, '', 0, 0, '', '', '', 0, '', '', 0, '', '', '', 0, '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '', 0, 0, 0, '', '', '', 0);
    this.date = new Date();
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo = response.modelo;
      })
    });
  }

  onSubmit(buttonType) {
    if (buttonType === 'I') {

      this._route.params.forEach((params: Params) => {
        let id = params['id'];

        this.modelo.USR = localStorage.getItem('_u');

        this.modelo.FECHA_INICIO_DESCRIPCION = moment(this.date).locale('es').format('LL');
        this.modelo.FECHA_INICIO = moment(this.date).format('YYYYMMDD');

        this.date.setDate(this.date.getDate() + (this.modelo.DIAS * 1));

        this.modelo.FECHA_FINAL_DESCRIPCION = moment(this.date).locale('es').format('LL');
        this.modelo.FECHA_FINAL = moment(this.date).format('YYYYMMDD');

        this._api.Ejecucion(id, this.modelo).subscribe(response => {
          this._router.navigate(['/tablero']);
        });

      });

    }
  }
}
