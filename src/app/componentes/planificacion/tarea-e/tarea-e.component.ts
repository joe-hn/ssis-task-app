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
  selector: 'app-tarea-e',
  templateUrl: './tarea-e.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiUsuarioService,
    ApiUsuarioService,
    ApiCategoriaTareaOperacionService]
})
export class TareaEComponent implements OnInit {
  modelo: tareaOperacion;
  categoriaModelo: categoriaTareaOperacion[];
  usuarioLogeo: usuario;
  usuarioModelo: usuario[];


  date: Date;
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
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo = response.modelo;
        this.date = new Date(this.modelo.ANIO, this.modelo.MES, this.modelo.DIA);
       
        console.log(this.modelo);
        this.GET_CATEGORIA();
      });
    });
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
    this._apiCategoria.GetMaxCount(this.modelo.CATEGORIA_TAREA_OPERACION_ID).subscribe(response => {
      if (response.modelo != null) {
        this.modelo.EDT = response.modelo.EDT_MAX + 1;
      } else {
        this.modelo.EDT = 1;
      }
    });
  }

  onSubmit() {
    if (this.modelo.NOMBRE && this.modelo.ID != 0 && this.modelo.RESPONSABLE_ID != 0 && this.modelo.EDT != 0) {

      this.modelo.USR = localStorage.getItem('_u');
      var tareaEdt = this.categoriaModelo.find(x => x.ID == this.modelo.CATEGORIA_TAREA_OPERACION_ID);
      this.modelo.EDT_DESCRIPCION = tareaEdt.EDT_DESCRIPCION + '.' + this.modelo.EDT;

      this.modelo.FECHA_INICIO_ESTIMADA_DESCRIPCION = moment(this.date).locale('es').format('LL');
      this.modelo.FECHA_INICIO_ESTIMADA = moment(this.date).format('YYYYMMDD');

      this.date.setDate(this.date.getDate() + (this.modelo.DIAS * 1));

      this.modelo.FECHA_FINAL_ESTIMADA_DESCRIPCION = moment(this.date).locale('es').format('LL');
      this.modelo.FECHA_FINAL_ESTIMADA = moment(this.date).format('YYYYMMDD');
      
      this._api.Patch(this.modelo.ID, this.modelo).subscribe(response => {
        this._router.navigate(['/tablero']);
      });

    }
  }

}
