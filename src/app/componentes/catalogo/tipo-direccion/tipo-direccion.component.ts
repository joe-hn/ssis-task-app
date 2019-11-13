import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { ApiTipoDireccionService } from '../../../servicio/api-tipo-direccion.service';
import { tipoDireccion } from '../../../modelo/tipoDireccion';

@Component({
  selector: 'app-tipo-direccion',
  templateUrl: './tipo-direccion.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiTipoDireccionService]
})
export class TipoDireccionComponent implements OnInit {
  displayedColumns: string[] = ['NOMBRE', 'editar', 'eliminar'];
  modelo: tipoDireccion[];
  dataSource;

  @ViewChild(MatPaginator, { static: false }) paginacion: MatPaginator;

  constructor(
    private _api: ApiTipoDireccionService
  ) { }

  ngOnInit() {
    this._api.Get().subscribe(response => {
      this.modelo = response.modelo;
      this.dataSource = new MatTableDataSource<tipoDireccion>(this.modelo);
      this.dataSource.paginator = this.paginacion;
    },
      error => {
        console.log(<any>error);
      }
    );
  }
}
