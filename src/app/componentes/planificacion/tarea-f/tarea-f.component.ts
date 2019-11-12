import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';

import { ApiTareaOperacionService } from '../../../servicio/api-tarea-operacion.service';
import { tareaOperacion } from 'src/app/modelo/tareaOperacion';

@Component({
  selector: 'app-tarea-f',
  templateUrl: './tarea-f.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiTareaOperacionService]
})
export class TareaFComponent implements OnInit {
  modelo: tareaOperacion;
  buttonType: string;

  constructor(
    private _api: ApiTareaOperacionService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.modelo = new tareaOperacion(0, '', 0, 0, '', '', '', 0, '', '', 0, '', '', '', 0, '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '', 0);
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this.modelo.ID = id;
    });
  }

  onSubmit(buttonType) {
    if (buttonType === "completa") {
      this.modelo.USR = localStorage.getItem('_u');

      this._api.Completada(this.modelo.ID, this.modelo).subscribe(response => {
        this._router.navigate(['/tablero']);
      });

    } else if (buttonType === "cancelada") {
      this.modelo.USR = localStorage.getItem('_u');

      this._api.cancelada(this.modelo.ID, this.modelo).subscribe(response => {
        this._router.navigate(['/tablero']);
      });
    }

  }

}
