import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiCategoriaTareaOperacionService } from '../../../../servicio/api-categoria-tarea-operacion.service';

import { categoriaTareaOperacion } from '../../../../modelo/categoriaTareaOperacion';
import { usuario } from '../../../../modelo/usuario';

@Component({
  selector: 'app-catgoria-tarea-operacion-a',
  templateUrl: './catgoria-tarea-operacion-a.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiCategoriaTareaOperacionService]
})
export class CatgoriaTareaOperacionAComponent implements OnInit {
  modelo: categoriaTareaOperacion;
  usuarioLogeo: usuario;

  constructor(
    private _api: ApiCategoriaTareaOperacionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new categoriaTareaOperacion(0, 0, '', '', '', 0, '');
    this.usuarioLogeo = JSON.parse(localStorage.getItem('_user'));
    this.modelo.DIRECCION_ID = this.usuarioLogeo.DIRECCION_ID;
  }

  ngOnInit() {
    this._api.GetMaxCount(this.usuarioLogeo.DIRECCION_ID).subscribe(response => {
      if (response.modelo != null) {
        this.modelo.EDT = response.modelo.EDT_MAX + 1;
      } else {
        this.modelo.EDT = 1;
      }
    })
  }


  onSubmit() {
    if (this.modelo.NOMBRE && this.modelo.EDT != 0) {
      this.modelo.USR = localStorage.getItem('_u');
      this.modelo.EDT_DESCRIPCION = this.modelo.EDT.toString();

      this._api.Post(this.modelo).subscribe(response => {
        if (!response.error_estado) {
          this._router.navigate(['/catalogo']);
        } else {

        }
      });
    } else {

    }
  }
}
