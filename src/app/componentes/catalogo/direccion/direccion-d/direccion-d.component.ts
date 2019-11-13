import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiDireccionService } from '../../../../servicio/api-direccion.service';

import { direccion } from '../../../../modelo/direccion';

@Component({
  selector: 'app-direccion-d',
  templateUrl: './direccion-d.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiDireccionService]
})
export class DireccionDComponent implements OnInit {
  modelo: direccion;

  constructor(
    private _api: ApiDireccionService,
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
      })
    });
  }

  onSubmit() {
    if (this.modelo.NOMBRE) {
      this.modelo.USR = localStorage.getItem('_u');
      this._api.Delete(this.modelo.ID, this.modelo.USR).subscribe(response => {
        this._router.navigate(['/catalogo']);
      });
    }
  }

}
