import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiDireccionService } from '../../../../servicio/api-direccion.service';
import { ApiTipoDireccionService } from '../../../../servicio/api-tipo-direccion.service';

import { direccion } from '../../../../modelo/direccion';
import { tipoDireccion } from '../../../../modelo/tipoDireccion';

@Component({
  selector: 'app-direccion-a',
  templateUrl: './direccion-a.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiDireccionService,
    ApiTipoDireccionService]
})
export class DireccionAComponent implements OnInit {
  modelo: direccion;
  tipoDireccionModelo: tipoDireccion[];
  buttonType: string;

  constructor(
    private _api: ApiDireccionService,
    private _apiTipoDireccion: ApiTipoDireccionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new direccion(0, 0,'', '', '');
  }

  ngOnInit() {
    this.GET_TIPODIRECCION();
  }

  GET_TIPODIRECCION() {
    this._apiTipoDireccion.Get().subscribe(response => {
      this.tipoDireccionModelo = response.modelo;
    });
  }

  onSubmit(buttonType) {
    if (buttonType === "S") {
      if (this.modelo.NOMBRE) {
        this.modelo.USR = localStorage.getItem('_u');
        this._api.Post(this.modelo).subscribe(response => {
          this._router.navigate(['/catalogo']);
        });
      }
    }
    else if (buttonType === "SC") {
      if (this.modelo.NOMBRE) {
        this.modelo.USR = localStorage.getItem('_u');
        this._api.Post(this.modelo).subscribe(response => {
          this.modelo.NOMBRE = '';
        });
      }
    }

  }
}
