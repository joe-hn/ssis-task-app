import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiCargoService } from '../../../../servicio/api-cargo.service';
import { cargo } from '../../../../modelo/cargo';

@Component({
  selector: 'app-cargo-e',
  templateUrl: './cargo-e.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiCargoService]
})
export class CargoEComponent implements OnInit {
  modelo: cargo;

  constructor(
    private _api: ApiCargoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new cargo(0, '', '', '');
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
      this._api.Patch(this.modelo.ID, this.modelo).subscribe(response => {
        this._router.navigate(['/catalogo']);
      });
    } else {

    }
  }
}
