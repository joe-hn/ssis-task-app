import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiRolService } from '../../../../servicio/api-rol.service';
import { rol } from '../../../../modelo/rol';

@Component({
  selector: 'app-rol-d',
  templateUrl: './rol-d.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiRolService]
})
export class RolDComponent implements OnInit {
  modelo: rol;

  constructor(
    private _api: ApiRolService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new rol(0, '', '', '', '');
  }

  ngOnInit() {
    this.getRol();
  }

  getRol() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo = response.modelo;        
      })
    });
  }

  onSubmit() {
    if (this.modelo.NOMBRE && this.modelo.DESCRIPCION) {
      
      this._api.Delete(this.modelo.ID, localStorage.getItem('_u')).subscribe(response => {
        this._router.navigate(['/seguridad']);
      });
    } else {

    }
  }
}
