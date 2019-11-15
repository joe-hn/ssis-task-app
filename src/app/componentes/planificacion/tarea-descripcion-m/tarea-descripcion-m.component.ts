import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';

import { tareaOperacion } from '../../../modelo/tareaOperacion';

@Component({
  selector: 'app-tarea-descripcion-m',
  templateUrl: './tarea-descripcion-m.component.html',
  styleUrls: ['../../../estilos/angular-material.css']
})
export class TareaDescripcionMComponent implements OnInit {
  modelo: tareaOperacion;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new tareaOperacion(0, '', 0, 0, '', '', '', 0, '', '', 0, '', '', '', 0, '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '', 0, 0, 0, '', '', '', 0);
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.modelo.ID = params['id'];
    });
  }

}
