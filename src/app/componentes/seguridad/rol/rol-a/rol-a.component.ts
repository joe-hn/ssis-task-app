import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiRolService } from '../../../../servicio/api-rol.service';
import { rol } from '../../../../modelo/rol';

@Component({
  selector: 'app-rol-a',
  templateUrl: './rol-a.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiRolService]
})
export class RolAComponent implements OnInit {
  modelo: rol;

  constructor(
    private _api: ApiRolService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new rol(0, '', '', '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.modelo.NOMBRE) {
      this.modelo.USR = localStorage.getItem('_u');      
      this._api.Post(this.modelo).subscribe(response => {
        if (!response.error_estado) {
          this._router.navigate(['/seguridad']);
        } else {

        }
      });
    } else {

    }
  }

}
