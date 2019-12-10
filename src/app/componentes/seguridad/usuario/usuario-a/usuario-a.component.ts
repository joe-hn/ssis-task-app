import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiUsuarioService } from '../../../../servicio/api-usuario.service';
import { ApiRolService } from '../../../../servicio/api-rol.service';
import { ApiEmpleadoService } from '../../../../servicio/api-empleado.service';

import { usuario } from '../../../../modelo/usuario';
import { rol } from '../../../../modelo/rol';
import { empleado } from '../../../../modelo/empleado';
import { ApiEmailService } from 'src/app/servicio/api-email.service';

@Component({
  selector: 'app-usuario-a',
  templateUrl: './usuario-a.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiUsuarioService,
    ApiRolService,
    ApiEmpleadoService]
})
export class UsuarioAComponent implements OnInit {
  modelo: usuario;
  rolMoldelo: rol[];
  empleadoModelo: empleado[];
  hide = true;

  constructor(
    private _api: ApiUsuarioService,
    private _apiRol: ApiRolService,
    private _apiEmpleado: ApiEmpleadoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new usuario(0, '', '', '', '', '', '', 0, '', 0, false, 0, 0, '', 0, '', '');
  }

  ngOnInit() {
    this.GET_ROL();
  }

  GET_ROL() {
    this._apiRol.Get().subscribe(response => {
      this.rolMoldelo = response.modelo;

      this.GET_EMPLEADO();
    })
  }

  GET_EMPLEADO() {
    this._apiEmpleado.GetEmpleadoSinUsuario().subscribe(response => {
      this.empleadoModelo = response.modelo;
    })
  }

  onSubmit() {
    if (this.modelo.USUARIO && this.modelo.ROL_ID != 0 && this.modelo.EMPLEADO_ID != 0) {
      this.modelo.USR = localStorage.getItem('_u');

      if (this.modelo.JEFE_MARCA) {
        this.modelo.JEFE = 1;
      } else {
        this.modelo.JEFE = 0;
      }      
     
      this._api.Post(this.modelo).subscribe(response => {
        if (!response.error_estado) {
          this._router.navigate(['/seguridad']);
        } else {

        }
      });

    }

  }

}
