import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { ApiRolService } from '../../../servicio/api-rol.service';
import { rol } from '../../../modelo/rol';
 
@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiRolService]
})
export class RolComponent implements OnInit {
  displayedColumns: string[] = ['NOMBRE', 'DESCRIPCION', 'ESTADO', 'editar', 'eliminar'];
  modelo: rol[];
  dataSource;

  @ViewChild(MatPaginator, { static: false }) paginacion: MatPaginator;

  constructor(
    private _api: ApiRolService
  ) { }

  ngOnInit() {
    this._api.Get().subscribe(response => {
      this.modelo = response.modelo;
      this.dataSource = new MatTableDataSource<rol>(this.modelo);
      this.dataSource.paginator = this.paginacion;
    },
      error => {
        console.log(<any>error);
      }
    );
  }

}
