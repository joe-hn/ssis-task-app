import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';

import { ApiTareaOperacionService } from '../../../servicio/api-tarea-operacion.service';
import { ApiUsuarioService } from '../../../servicio/api-usuario.service';
import { ApiCategoriaTareaOperacionService } from '../../../servicio/api-categoria-tarea-operacion.service';

import { tareaOperacion } from 'src/app/modelo/tareaOperacion';
import { usuario } from '../../../modelo/usuario';
import { categoriaTareaOperacion } from '../../../modelo/categoriaTareaOperacion';

@Component({
  selector: 'app-tarea-a',
  templateUrl: './tarea-a.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiUsuarioService,
    ApiUsuarioService,
    ApiCategoriaTareaOperacionService]
})
export class TareaAComponent implements OnInit {
  modelo: tareaOperacion;
  categoriaModelo: categoriaTareaOperacion[];
  usuarioLogeo: usuario;
  usuarioModelo: usuario[];
  esTarea: boolean;

  date: Date;
  dateEntrega: Date;
  dateValidador: Date;

  constructor(
    private _api: ApiTareaOperacionService,
    private _apiUsuario: ApiUsuarioService,
    private _apiCategoria: ApiCategoriaTareaOperacionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new tareaOperacion(0, '', 0, 0, '', '', '', 0, '', '', 0, '', '', '', 0, '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '', 0);
    this.usuarioLogeo = JSON.parse(localStorage.getItem('_user'));
    this.date = new Date();
    this.dateValidador = new Date();
    this.dateEntrega = new Date();
    this.esTarea = true;
  }

  ngOnInit() {
    this.GET_CATEGORIA();
    this.modelo.DIRECCION_ID = this.usuarioLogeo.DIRECCION_ID;

    if (!this.usuarioLogeo.JEFE) {
      this.modelo.RESPONSABLE_ID = this.usuarioLogeo.ID;
    }
  }

  GET_CATEGORIA() {
    this._apiCategoria.Get().subscribe(response => {
      this.categoriaModelo = response.modelo;

      this.GET_USUARIO();
    });
  }

  GET_USUARIO() {
    this._apiUsuario.GetOficial(this.usuarioLogeo.DIRECCION_ID).subscribe(response => {
      this.usuarioModelo = response.modelo;
    });
  }

  onSelectCategoria() {
    this._api.GetMaxCount(this.modelo.CATEGORIA_TAREA_OPERACION_ID).subscribe(response => {      
      if (response.modelo != null) {
        this.modelo.EDT = response.modelo.EDT_MAX + 1;
      } else {
        this.modelo.EDT = 1;
      }
    })
  }

  onSubmit(buttonType) {
    this.modelo.USR = localStorage.getItem('_u');
    var tareaEdt = this.categoriaModelo.find(x => x.ID == this.modelo.CATEGORIA_TAREA_OPERACION_ID);
    this.modelo.EDT_DESCRIPCION = tareaEdt.EDT_DESCRIPCION + '.' + this.modelo.EDT;

    if (this.esTarea) {
      this.modelo.FECHA_INICIO_ESTIMADA_DESCRIPCION = moment(this.date).locale('es').format('LL');
      this.modelo.FECHA_INICIO_ESTIMADA = moment(this.date).format('YYYYMMDD');

      var contador = 1;
      var FFDate = this.date;

      while (contador <= this.modelo.DIAS) {
        if (FFDate.getDay() == 6 || FFDate.getDay() == 0) {
        } else {
          contador++;
        }
        if (contador <= this.modelo.DIAS) {
          FFDate.setDate(this.date.getDate() + 1);
        }
      }

      this.modelo.FECHA_FINAL_ESTIMADA_DESCRIPCION = moment(FFDate).locale('es').format('LL');
      this.modelo.FECHA_FINAL_ESTIMADA = moment(FFDate).format('YYYYMMDD');

      this._api.Post(this.modelo).subscribe(response => {
        if (buttonType === "S") {
          this._router.navigate(['/tablero']);
        } else if (buttonType === "SC") {
          this.modelo.NOMBRE = '';
          this.modelo.DESCRIPCION = '';
          this.modelo.EDT = (this.modelo.EDT + 1);
          this.modelo.DIAS = 0;
          this.date = new Date();
        }
      });

    } else {
      this.modelo.FECHA_INICIO_ESTIMADA_DESCRIPCION = moment(Date.now()).locale('es').format('LL');
      this.modelo.FECHA_INICIO_ESTIMADA = moment(Date.now()).format('YYYYMMDD');
      this.modelo.FECHA_INICIO_DESCRIPCION = moment(Date.now()).locale('es').format('LL');
      this.modelo.FECHA_INICIO = moment(Date.now()).format('YYYYMMDD');

      this.modelo.FECHA_FINAL_ESTIMADA_DESCRIPCION = moment(this.dateEntrega).locale('es').format('LL');
      this.modelo.FECHA_FINAL_ESTIMADA = moment(this.dateEntrega).format('YYYYMMDD');
      this.modelo.FECHA_FINAL_DESCRIPCION = moment(this.dateEntrega).locale('es').format('LL');
      this.modelo.FECHA_FINAL = moment(this.dateEntrega).format('YYYYMMDD');

      this._api.PostTareaEntrega(this.modelo).subscribe(response => {
        if (buttonType === "S") {
          this._router.navigate(['/tablero']);
        } else if (buttonType === "SC") {
          this.modelo.NOMBRE = '';
          this.modelo.DESCRIPCION = '';
          this.modelo.EDT = (this.modelo.EDT + 1);
          this.modelo.DIAS = 0;
          this.date = new Date();
        }
      });
    }

  }

}
