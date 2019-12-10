import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { ApiUsuarioService } from '../../../servicio/api-usuario.service';
import { usuario } from '../../../modelo/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiUsuarioService]
})
export class UsuarioComponent implements OnInit {
  displayedColumns: string[] = ['ROL','TIPO_DIRECCION','DIRECCION','JEFE_DESCRIPCION', 'NOMBRE', 'USUARIO', 'EMAIL', 'ESTADO', 'cambioEstado', 'editar', 'eliminar'];
  modelo: usuario[];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginacion: MatPaginator;

  constructor(
    private _api: ApiUsuarioService
  ) { }
 
  ngOnInit() {
    this._api.Get().subscribe(response => {
      this.modelo = response.modelo;     
      this.dataSource = new MatTableDataSource<usuario>(this.modelo);
      this.dataSource.paginator = this.paginacion;
    },
      error => {
        console.log(<any>error);
      }
    );
  }

}
