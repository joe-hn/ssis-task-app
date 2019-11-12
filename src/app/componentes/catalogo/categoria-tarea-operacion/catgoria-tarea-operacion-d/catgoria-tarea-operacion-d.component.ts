import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiCategoriaTareaOperacionService } from '../../../../servicio/api-categoria-tarea-operacion.service';

import { categoriaTareaOperacion } from '../../../../modelo/categoriaTareaOperacion';
import { usuario } from '../../../../modelo/usuario';


@Component({
  selector: 'app-catgoria-tarea-operacion-d',
  templateUrl: './catgoria-tarea-operacion-d.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiCategoriaTareaOperacionService]
})
export class CatgoriaTareaOperacionDComponent implements OnInit {
  modelo: categoriaTareaOperacion;
  

  constructor(
    private _api: ApiCategoriaTareaOperacionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new categoriaTareaOperacion(0, 0, '', '', '', 0, '');
    
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

      this._api.Delete(this.modelo.ID, this.modelo.USR).subscribe(response => {
        if (!response.error_estado) {
          this._router.navigate(['/catalogo']);
        } else {

        }
      });
    } else {

    }
  }

}
