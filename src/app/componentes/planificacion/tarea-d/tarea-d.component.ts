import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';

import { ApiTareaOperacionService } from '../../../servicio/api-tarea-operacion.service';

import { tareaOperacion } from 'src/app/modelo/tareaOperacion';
 
@Component({
  selector: 'app-tarea-d',
  templateUrl: './tarea-d.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiTareaOperacionService]
})
export class TareaDComponent implements OnInit {
  modelo: tareaOperacion;

  date: Date;
  dateValidador: Date;

  constructor(
    private _api: ApiTareaOperacionService,
    
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new tareaOperacion(0, '', 0, 0, '', '', '', 0, '', '', 0, '', '', '', 0, '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '', 0);    
    this.date = new Date();
    this.dateValidador = new Date();
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo = response.modelo;
        this.date = new Date(this.modelo.ANIO, this.modelo.MES, this.modelo.DIA);      
      });
    });
  }

  onSubmit() {
    if (this.modelo.NOMBRE && this.modelo.ID != 0 && this.modelo.RESPONSABLE_ID != 0 && this.modelo.EDT != 0) {
      this._route.params.forEach((params: Params) => {
        let id = params['id'];

        this.modelo.USR = localStorage.getItem('_u');

        this._api.Delete(id, this.modelo.USR).subscribe(response => {
          this._router.navigate(['/tablero']);
        });
  
      });
    }
  }

}
