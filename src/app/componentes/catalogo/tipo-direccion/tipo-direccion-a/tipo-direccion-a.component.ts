import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiTipoDireccionService } from '../../../../servicio/api-tipo-direccion.service';
import { tipoDireccion } from '../../../../modelo/tipoDireccion';

@Component({
  selector: 'app-tipo-direccion-a',
  templateUrl: './tipo-direccion-a.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiTipoDireccionService]
})
export class TipoDireccionAComponent implements OnInit {
  modelo: tipoDireccion;
  buttonType: string;

  constructor(
    private _api: ApiTipoDireccionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new tipoDireccion(0, '', '');
  }

  ngOnInit() {
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
