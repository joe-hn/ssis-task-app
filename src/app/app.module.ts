import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './comunes/DemoMaterialModule';

import { registerLocaleData } from '@angular/common';
import localesHN from '@angular/common/locales/es-HN';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './portales/inicio/inicio.component';
import { MenuComponent } from './portales/menu/menu.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { LoginComponent } from './componentes/login/login.component';
import { TareaAComponent } from './componentes/planificacion/tarea-a/tarea-a.component';
import { EjecucionComponent } from './componentes/tablero/ejecucion/ejecucion.component';
import { TareaDescripcionAComponent } from './componentes/planificacion/tarea-descripcion-a/tarea-descripcion-a.component';
import { TareaDescripcionMComponent } from './componentes/planificacion/tarea-descripcion-m/tarea-descripcion-m.component';
import { TareaDescripcionSolicitudComponent } from './componentes/planificacion/tarea-descripcion-solicitud/tarea-descripcion-solicitud.component';
import { TareaEComponent } from './componentes/planificacion/tarea-e/tarea-e.component';
import { TareaFComponent } from './componentes/planificacion/tarea-f/tarea-f.component';
import { TareaRComponent } from './componentes/planificacion/tarea-r/tarea-r.component';
import { TareaSolicitudComponent } from './componentes/planificacion/tarea-solicitud/tarea-solicitud.component';
import { TareaSolicitudSalidaComponent } from './componentes/planificacion/tarea-solicitud-salida/tarea-solicitud-salida.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { CategoriaTareaOperacionComponent } from './componentes/catalogo/categoria-tarea-operacion/categoria-tarea-operacion.component';
import { CatgoriaTareaOperacionAComponent } from './componentes/catalogo/categoria-tarea-operacion/catgoria-tarea-operacion-a/catgoria-tarea-operacion-a.component';
import { CatgoriaTareaOperacionDComponent } from './componentes/catalogo/categoria-tarea-operacion/catgoria-tarea-operacion-d/catgoria-tarea-operacion-d.component';
import { CatgoriaTareaOperacionEComponent } from './componentes/catalogo/categoria-tarea-operacion/catgoria-tarea-operacion-e/catgoria-tarea-operacion-e.component';
import { PendienteComponent } from './componentes/tablero/pendiente/pendiente.component';
import { TareaDComponent } from './componentes/planificacion/tarea-d/tarea-d.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    TableroComponent,
    LoginComponent,
    TareaAComponent,
    EjecucionComponent,
    TareaDescripcionAComponent,
    TareaDescripcionMComponent,
    TareaDescripcionSolicitudComponent,
    TareaEComponent,
    TareaFComponent,
    TareaRComponent,
    TareaSolicitudComponent,
    TareaSolicitudSalidaComponent,
    CatalogoComponent,
    CategoriaTareaOperacionComponent,
    CatgoriaTareaOperacionAComponent,
    CatgoriaTareaOperacionDComponent,
    CatgoriaTareaOperacionEComponent,
    PendienteComponent,
    TareaDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
