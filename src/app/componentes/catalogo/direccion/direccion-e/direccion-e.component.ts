import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiDireccionService } from '../../../../servicio/api-direccion.service';
import { ApiTipoDireccionService } from '../../../../servicio/api-tipo-direccion.service';

import { direccion } from '../../../../modelo/direccion';
import { tipoDireccion } from '../../../../modelo/tipoDireccion';


@Component({
  selector: 'app-direccion-e',
  templateUrl: './direccion-e.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiDireccionService,
    ApiTipoDireccionService]
})
export class DireccionEComponent implements OnInit {
  modelo: direccion;
  tipoDireccionModelo: tipoDireccion[];

  constructor(
    private _api: ApiDireccionService,
    private _apiTipoDireccion: ApiTipoDireccionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new direccion(0, 0, '', '', '');
  }

  ngOnInit() {
    this.GET();
  }

  GET() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo = response.modelo;

        this.GET_TIPODIRECCION();
      })
    });
  }

  GET_TIPODIRECCION() {
    this._apiTipoDireccion.Get().subscribe(response => {
      this.tipoDireccionModelo = response.modelo;
    });
  }

  onSubmit() {
    if (this.modelo.NOMBRE) {
      this.modelo.USR = localStorage.getItem('_u');
      this._api.Post(this.modelo).subscribe(response => {
        this._router.navigate(['/catalogo']);
      });
    }
  }

}
