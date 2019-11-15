import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';

import { ApiTareaOperacionService } from '../../../servicio/api-tarea-operacion.service';
import { ApiUsuarioService } from '../../../servicio/api-usuario.service';

import { tareaOperacion } from 'src/app/modelo/tareaOperacion';
import { usuario } from '../../../modelo/usuario';

@Component({
  selector: 'app-tarea-r',
  templateUrl: './tarea-r.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiTareaOperacionService,
    ApiUsuarioService]
})
export class TareaRComponent implements OnInit {
  modelo: tareaOperacion;
  date: Date;
  usuarioLogeo: usuario;
  usuarioModelo: usuario[];

  constructor(
    private _api: ApiTareaOperacionService,
    private _apiUsuario: ApiUsuarioService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new tareaOperacion(0, '', 0, 0, '', '', '', 0, '', '', 0, '', '', '', 0, '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '', 0, 0, 0, '', '', '', 0);
    this.usuarioLogeo = JSON.parse(localStorage.getItem('_user'));
    this.date = new Date();
  }

  GET_USUARIO() {
    this._apiUsuario.GetOficial(this.usuarioLogeo.DIRECCION_ID).subscribe(response => {
      this.usuarioModelo = response.modelo;
    });
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo = response.modelo;
        this.date = new Date(this.modelo.ANIO, this.modelo.MES, this.modelo.DIA);

        this.GET_USUARIO();
      });
    });
  }

  onSubmit() {
    if (this.modelo.NOMBRE && this.modelo.DIA != 0 && this.modelo.DESCRIPCION && this.modelo.REPLANIFICACION) {

      this.modelo.USR = localStorage.getItem('_u');

      this.modelo.FECHA_INICIO_DESCRIPCION = moment(this.date).locale('es').format('LL');
      this.modelo.FECHA_INICIO = moment(this.date).format('YYYYMMDD');

      this.date.setDate(this.date.getDate() + (this.modelo.DIAS * 1));

      this.modelo.FECHA_FINAL_DESCRIPCION = moment(this.date).locale('es').format('LL');
      this.modelo.FECHA_FINAL = moment(this.date).format('YYYYMMDD');

      this._api.replanificada(this.modelo.ID, this.modelo).subscribe(response => {
        this._router.navigate(['/tablero']);
      });

    }
  }

}
