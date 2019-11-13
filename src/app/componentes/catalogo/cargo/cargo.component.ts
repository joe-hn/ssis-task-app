import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { ApiCargoService } from '../../../servicio/api-cargo.service';
import { cargo } from '../../../modelo/cargo';

 
@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiCargoService]
})
export class CargoComponent implements OnInit {
  displayedColumns: string[] = ['NOMBRE', 'editar', 'eliminar'];
  modelo: cargo[];
  dataSource;

  @ViewChild(MatPaginator, { static: false }) paginacion: MatPaginator;

  constructor(
    private _api: ApiCargoService
  ) { }

  ngOnInit() {

    this._api.Get().subscribe(response => {

      this.modelo = response.modelo;
      this.dataSource = new MatTableDataSource<cargo>(this.modelo);
      this.dataSource.paginator = this.paginacion;

    },
      error => {
        console.log(<any>error);
      }
    );
  }
}
