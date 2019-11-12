import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiCategoriaTareaOperacionService } from '../../../../servicio/api-categoria-tarea-operacion.service';

import { categoriaTareaOperacion } from '../../../../modelo/categoriaTareaOperacion';
import { usuario } from '../../../../modelo/usuario';

@Component({
  selector: 'app-catgoria-tarea-operacion-e',
  templateUrl: './catgoria-tarea-operacion-e.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiCategoriaTareaOperacionService]
})
export class CatgoriaTareaOperacionEComponent implements OnInit {
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
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo = response.modelo;
      });
    });
  }


  onSubmit() {
    if (this.modelo.NOMBRE && this.modelo.EDT != 0) {
      this.modelo.USR = localStorage.getItem('_u');

      this._api.Patch(this.modelo.ID, this.modelo).subscribe(response => {
        if (!response.error_estado) {
          this._router.navigate(['/catalogo']);
        } else {

        }
      });
    } else {

    }
  }

}
