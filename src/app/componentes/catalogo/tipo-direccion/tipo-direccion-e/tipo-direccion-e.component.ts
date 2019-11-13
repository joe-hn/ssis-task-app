import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiTipoDireccionService } from '../../../../servicio/api-tipo-direccion.service';
import { tipoDireccion } from '../../../../modelo/tipoDireccion';
 
@Component({
  selector: 'app-tipo-direccion-e',
  templateUrl: './tipo-direccion-e.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiTipoDireccionService]
})
export class TipoDireccionEComponent implements OnInit {
  modelo: tipoDireccion;

  constructor(
    private _api: ApiTipoDireccionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new tipoDireccion(0, '', '');
  }

  ngOnInit() {
    this.getRol();
  }

  getRol() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo = response.modelo;       
      })
    });
  }

  onSubmit() {
    if (this.modelo.NOMBRE) {
      this.modelo.USR = localStorage.getItem('_u');
      this._api.Patch(this.modelo.ID, this.modelo).subscribe(response => {
        this._router.navigate(['/catalogo']);
      });
    } else {

    }
  }
}
