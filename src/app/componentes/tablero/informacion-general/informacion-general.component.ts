import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';

import { ApiTareaOperacionDescripcionService } from '../../../servicio/api-tarea-operacion-descripcion.service';
import { ApiTareaOperacionService } from '../../../servicio/api-tarea-operacion.service';
import { tareaOperacionDescripcion } from '../../../modelo/tareaOperacionDescripcion';
import { tareaOperacion } from '../../../modelo/tareaOperacion';

@Component({
  selector: 'app-informacion-general',
  templateUrl: './informacion-general.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiTareaOperacionDescripcionService,
    ApiTareaOperacionService]
})
export class InformacionGeneralComponent implements OnInit {
  modelo: tareaOperacionDescripcion;
  tareaDescripcionModelo: tareaOperacionDescripcion[];
  tareaModelo: tareaOperacion;

  constructor(
    private _api: ApiTareaOperacionDescripcionService,
    private _apiTarea: ApiTareaOperacionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new tareaOperacionDescripcion(0, 0, 0, '', 1, '', '', '', '', '', '', '', '', '', '', '', '', '', '');
    this.tareaModelo = new tareaOperacion(0, '', 0, 0, '', '', '', 0, '', '', 0, '', '', '', 0, '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '', 0, 0, 0, '', '', '', 0);
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._apiTarea.GetId(id).subscribe(response => {
        this.tareaModelo = response.modelo;

        this._api.GetTarea(id).subscribe(responseTarea => {
          this.tareaDescripcionModelo = responseTarea.modelo;
        });
      });
    });
  }
  
}
