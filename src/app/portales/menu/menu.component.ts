import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { usuario } from '../../modelo/usuario';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../../estilos/login.css']
})
export class MenuComponent implements OnInit, DoCheck {
  modelo: usuario;
  flag: boolean;
  usuario: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {

    this.modelo = new usuario(0, '', '', '', '', '', '', 0, '', 0, false, 0, 0, '', 0, '', '');
  }

  ngOnInit() {
    this.inicioSecion();
  }

  ngDoCheck() {
    this.inicioSecion();
  }

  inicioSecion() {
    var st = JSON.parse(localStorage.getItem('_usr'));

    if (st != null) {
      this.modelo = JSON.parse(localStorage.getItem('_usr'));
      this.usuario = this.modelo.USUARIO;

      if (!this.modelo) {
        this.flag = true;
      } else {
        this.flag = false;
      }

      if (this._router.url == '/login') {
        this.flag = true;
      }
    } else {
      this.flag = true;
    }
  }

  cierreSecion() {
    console.log('----------- cierreSecion')
    localStorage.clear();
    this.modelo = null;
    this.flag = false;
    this._router.navigate(['login']);
  }

}
