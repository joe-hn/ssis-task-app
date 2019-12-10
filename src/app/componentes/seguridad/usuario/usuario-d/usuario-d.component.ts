import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiUsuarioService } from '../../../../servicio/api-usuario.service';
import { ApiRolService } from '../../../../servicio/api-rol.service';
import { usuario } from '../../../../modelo/usuario';
import { rol } from '../../../../modelo/rol';

@Component({
  selector: 'app-usuario-d',
  templateUrl: './usuario-d.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiUsuarioService,
    ApiRolService]
})
export class UsuarioDComponent implements OnInit {
  modelo: usuario;
  rolMoldelo: rol[];

  constructor(
    private _api: ApiUsuarioService,
    private _apiRol: ApiRolService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new usuario(0, '', '', '', '', '', '', 0, '', 0, false, 0, 0, '', 0, '', '');
  }

  ngOnInit() {
    this._apiRol.Get().subscribe(response => {
      this.rolMoldelo = response.modelo;

      this.getUsuario();
    },
      error => {
        console.log(<any>error);
      }
    )
  }

  getUsuario() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo = response.modelo;
      })
    });
  }

  onSubmit() {
    if (this.modelo.ROL_ID && this.modelo.ESTADO) {

      this._api.Delete(this.modelo.ID, localStorage.getItem('_u')).subscribe(response => {
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
