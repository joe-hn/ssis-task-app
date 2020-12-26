import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validator,
  Validators,
  ControlContainer,
} from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { ApiLoginService } from "../../servicio/api-login.service";
import { usuario } from "../../modelo/usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["../../estilos/login.css"],
  providers: [ApiLoginService],
})
export class LoginComponent implements OnInit {
  modelo: usuario;
  hide = true;

  constructor(
    private _api: ApiLoginService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new usuario(
      0,
      "",
      "",
      "",
      "",
      "",
      "",
      0,
      "",
      0,
      false,
      0,
      0,
      "",
      0,
      "",
      ""
    );
  }

  ngOnInit() {}

  onSubmit() {
    if (this.modelo.USUARIO && this.modelo.PASS) {
      this._api.Login(this.modelo).subscribe((response) => {
        if (!response.error_estado) {
          this.modelo = response.modelo;

          localStorage.setItem("_usr", JSON.stringify(response.modelo));
          localStorage.setItem("_u", response.modelo.USUARIO);
          localStorage.setItem("_tk", response.tk);

          this._api.usuarioId(this.modelo.ID).subscribe((resUsuario) => {
            console.log(
              "---- USER",
              localStorage.setItem("_user", JSON.stringify(resUsuario.modelo))
            );
            localStorage.setItem("_user", JSON.stringify(resUsuario.modelo));
          });

          this._router.navigate(["/tablero"]);
        }
      });
    }
  }
}
