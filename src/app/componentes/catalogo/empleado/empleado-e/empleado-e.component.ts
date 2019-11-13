import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiDireccionService } from '../../../../servicio/api-direccion.service';
import { ApiCargoService } from '../../../../servicio/api-cargo.service';
import { ApiEmpleadoService } from '../../../../servicio/api-empleado.service';

import { direccion } from '../../../../modelo/direccion';
import { cargo } from '../../../../modelo/cargo';
import { empleado } from '../../../../modelo/empleado';


@Component({
  selector: 'app-empleado-e',
  templateUrl: './empleado-e.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiEmpleadoService,
    ApiDireccionService,
    ApiCargoService]
})
export class EmpleadoEComponent implements OnInit {
  modelo: empleado;
  direccionModelo: direccion[];
  cargoModelo: cargo[];

  constructor(
    private _api: ApiEmpleadoService,
    private _apiDireccion: ApiDireccionService,
    private _apiCargo: ApiCargoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new empleado(0, '', '', '', 0, 0, '', '', '');
  }

  GET_DIRECCION() {
    this._apiDireccion.Get().subscribe(response => {
      this.direccionModelo = response.modelo;

      this.GET_CARGO();
    })
  }

  GET_CARGO() {
    this._apiCargo.Get().subscribe(response => {
      this.cargoModelo = response.modelo;
    });
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo = response.modelo;

        this.GET_DIRECCION();
      });
    });
  }

  onSubmit() {
    if (this.modelo.NOMBRE) {
      this.modelo.USR = localStorage.getItem('_u');

      console.log(this.modelo);

      this._api.Patch(this.modelo.ID, this.modelo).subscribe(response => {
        if (!response.error_estado) {
          this._router.navigate(['/catalogo']);
        } else {

        }
      });

    }

  }
}
