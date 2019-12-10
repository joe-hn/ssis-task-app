import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiUsuarioService } from '../../../../servicio/api-usuario.service';
import { usuario } from '../../../../modelo/usuario';

@Component({
  selector: 'app-usuario-ce',
  templateUrl: './usuario-ce.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiUsuarioService]
})
export class UsuarioCeComponent implements OnInit {
  modelo: usuario;

  constructor(
    private _api: ApiUsuarioService,    
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new usuario(0, '', '', '', '', '', '', 0, '', 0, false, 0, 0, '', 0, '', '');
  }

  ngOnInit() {
    this.getUsuario();
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
      this.modelo.USR = localStorage.getItem('_u');
      this._api.CambioEstado(this.modelo.ID, this.modelo).subscribe(response => {
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
