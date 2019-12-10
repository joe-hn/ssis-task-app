import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiUsuarioService } from '../../../../servicio/api-usuario.service';
import { ApiRolService } from '../../../../servicio/api-rol.service';
import { ApiDireccionService } from '../../../../servicio/api-direccion.service';
import { ApiTipoDireccionService } from '../../../../servicio/api-tipo-direccion.service';

import { usuario } from '../../../../modelo/usuario';
import { rol } from '../../../../modelo/rol';
import { direccion } from '../../../../modelo/direccion';
import { tipoDireccion } from '../../../../modelo/tipoDireccion';


@Component({
  selector: 'app-usuario-e',
  templateUrl: './usuario-e.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiUsuarioService,
    ApiRolService]
})
export class UsuarioEComponent implements OnInit {
  modelo: usuario;
  rolMoldelo: rol[];
  direccionModelo: direccion[];
  tipoDireccionModelo: tipoDireccion[];

  constructor(
    private _api: ApiUsuarioService,
    private _apiRol: ApiRolService,
    private _apiDireccion: ApiDireccionService,
    private _apiTipoSireccion: ApiTipoDireccionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new usuario(0, '', '', '', '', '', '', 0, '', 0, false, 0, 0, '', 0, '', '');
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo = response.modelo;

        if (this.modelo.JEFE == 1) {
          this.modelo.JEFE_MARCA = true;
        } else {
          this.modelo.JEFE_MARCA = false;
        }
        console.log(this.modelo);
        this.GET_ROL();
      });
    });
  }

  GET_ROL() {
    this._apiRol.Get().subscribe(response => {
      this.rolMoldelo = response.modelo;
    })
  }

  onSubmit() {
    if (this.modelo.ROL_ID != 0) {
      this.modelo.USR = localStorage.getItem('_u');

      if (this.modelo.JEFE_MARCA) {
        this.modelo.JEFE = 1;
      } else {
        this.modelo.JEFE = 0;
      }

      this._api.Patch(this.modelo.ID, this.modelo).subscribe(response => {
        if (!response.error_estado) {
          this._router.navigate(['/seguridad']);
        } else {

        }
      }, err => {
        console.log(err);
      });
    } else {

    }

  }
}
