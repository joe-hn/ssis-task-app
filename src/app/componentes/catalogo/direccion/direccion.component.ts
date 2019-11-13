import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { ApiDireccionService } from '../../../servicio/api-direccion.service';
import { ApiTipoDireccionService } from '../../../servicio/api-tipo-direccion.service';

import { direccion } from '../../../modelo/direccion';
import { tipoDireccion } from '../../../modelo/tipoDireccion';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiDireccionService,
    ApiTipoDireccionService]
})
export class DireccionComponent implements OnInit {
  displayedColumns: string[] = ['NOMBRE', 'editar', 'eliminar'];
  modelo: direccion[];
  direccionModelo: direccion;
  tipoDireccionModelo: tipoDireccion[];
  dataSource;

  @ViewChild(MatPaginator, { static: false }) paginacion: MatPaginator;

  constructor(
    private _api: ApiDireccionService,
    private _apiTipoDireccion: ApiTipoDireccionService
  ) { 
    this.direccionModelo = new direccion(0,0,'', '','');
  }

  ngOnInit() {
    this.GET_TIPODIRECCION();
  }

  GET_TIPODIRECCION() {
    this._apiTipoDireccion.Get().subscribe(response => {
      this.tipoDireccionModelo = response.modelo;
    });
  }

  onSelectDireccion() {
    this.GET_DIRECCION();
  }

  GET_DIRECCION() {
    this._api.GetTipoDireccionId(this.direccionModelo.TIPO_DIRECCION_ID).subscribe(response => {
      this.modelo = response.modelo;
      this.dataSource = new MatTableDataSource<direccion>(this.modelo);
      this.dataSource.paginator = this.paginacion;
    },
      error => {
        console.log(<any>error);
      }
    );
  }
}
