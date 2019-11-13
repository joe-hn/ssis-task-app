import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { ApiEmpleadoService } from '../../../servicio/api-empleado.service';
import { empleado } from '../../../modelo/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiEmpleadoService]
})
export class EmpleadoComponent implements OnInit {
  displayedColumns: string[] = ['NOMBRE', 'DIRECCION', 'CARGO', 'editar', 'eliminar'];
  modelo: empleado[];
  dataSource;

  @ViewChild(MatPaginator, { static: false }) paginacion: MatPaginator;

  constructor(
    private _api: ApiEmpleadoService
  ) { }

  ngOnInit() {

    this._api.Get().subscribe(response => {

      this.modelo = response.modelo;
      this.dataSource = new MatTableDataSource<empleado>(this.modelo);
      this.dataSource.paginator = this.paginacion;

    },
      error => {
        console.log(<any>error);
      }
    );
  }
}
