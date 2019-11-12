import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { ApiCategoriaTareaOperacionService } from '../../../servicio/api-categoria-tarea-operacion.service';
import { categoriaTareaOperacion } from '../../../modelo/categoriaTareaOperacion';


@Component({
  selector: 'app-categoria-tarea-operacion',
  templateUrl: './categoria-tarea-operacion.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiCategoriaTareaOperacionService]
})
export class CategoriaTareaOperacionComponent implements OnInit {
  displayedColumns: string[] = ['EDT', 'NOMBRE', 'editar', 'eliminar'];
  modelo: categoriaTareaOperacion[];
  dataSource;

  @ViewChild(MatPaginator, { static: false }) paginacion: MatPaginator;

  constructor(
    private _api: ApiCategoriaTareaOperacionService
  ) { }

  ngOnInit() {
    
    this._api.Get().subscribe(response => {
      
      this.modelo = response.modelo;
      this.dataSource = new MatTableDataSource<categoriaTareaOperacion>(this.modelo);     
      this.dataSource.paginator = this.paginacion;
      
    },
      error => {
        console.log(<any>error);
      }
    );
  }
}
