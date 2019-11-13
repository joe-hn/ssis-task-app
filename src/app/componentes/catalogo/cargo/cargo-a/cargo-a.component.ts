import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiCargoService } from '../../../../servicio/api-cargo.service';
import { cargo } from '../../../../modelo/cargo';

@Component({
  selector: 'app-cargo-a',
  templateUrl: './cargo-a.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiCargoService]
})
export class CargoAComponent implements OnInit {
  modelo: cargo;

  constructor(
    private _api: ApiCargoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new cargo(0, '', '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.modelo.NOMBRE) {
      this.modelo.USR = localStorage.getItem('_u');
      this._api.Post(this.modelo).subscribe(response => {
        if (!response.error_estado) {
          this._router.navigate(['/catalogo']);
        } else {

        }
      });
    } else {

    }
  }

}
