import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiCargoService } from '../../../../servicio/api-cargo.service';
import { cargo } from '../../../../modelo/cargo';

@Component({
  selector: 'app-cargo-d',
  templateUrl: './cargo-d.component.html',
  styleUrls: ['../../../../estilos/angular-material.css'],
  providers: [ApiCargoService]
})
export class CargoDComponent implements OnInit {
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
      this._api.Delete(this.modelo.ID, localStorage.getItem('_u')).subscribe(response => {
        this._router.navigate(['/programa-proyecto']);
      });
    } else {

    }
  }

}
