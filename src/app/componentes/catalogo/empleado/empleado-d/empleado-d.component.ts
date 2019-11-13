import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiEmpleadoService } from '../../../../servicio/api-empleado.service';

import { direccion } from '../../../../modelo/direccion';
import { cargo } from '../../../../modelo/cargo';
import { empleado } from '../../../../modelo/empleado';

 
@Component({
  selector: 'app-empleado-d',
  templateUrl: './empleado-d.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiEmpleadoService]
})
export class EmpleadoDComponent implements OnInit {
  modelo: empleado;
  direccionModelo: direccion[];
  cargoModelo: cargo[];
  
  constructor(
    private _api: ApiEmpleadoService,    
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new empleado(0, '', '', '', 0, 0, '', '', '');
  }
  
  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo = response.modelo;     
      });
    });
  }

  onSubmit() {
    if (this.modelo.NOMBRE) {
      this.modelo.USR = localStorage.getItem('_u');

      this._api.Delete(this.modelo.ID, this.modelo.USR).subscribe(response => {
        if (!response.error_estado) {
          this._router.navigate(['/catalogo']);
        } else {

        }
      });

    }

  }
}
