import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './comunes/DemoMaterialModule';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

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
import { CargoComponent } from './componentes/catalogo/cargo/cargo.component';
import { DireccionComponent } from './componentes/catalogo/direccion/direccion.component';
import { EmpleadoComponent } from './componentes/catalogo/empleado/empleado.component';
import { TipoDireccionComponent } from './componentes/catalogo/tipo-direccion/tipo-direccion.component';
import { CargoAComponent } from './componentes/catalogo/cargo/cargo-a/cargo-a.component';
import { CargoDComponent } from './componentes/catalogo/cargo/cargo-d/cargo-d.component';
import { CargoEComponent } from './componentes/catalogo/cargo/cargo-e/cargo-e.component';
import { DireccionAComponent } from './componentes/catalogo/direccion/direccion-a/direccion-a.component';
import { DireccionDComponent } from './componentes/catalogo/direccion/direccion-d/direccion-d.component';
import { DireccionEComponent } from './componentes/catalogo/direccion/direccion-e/direccion-e.component';
import { EmpleadoAComponent } from './componentes/catalogo/empleado/empleado-a/empleado-a.component';
import { EmpleadoDComponent } from './componentes/catalogo/empleado/empleado-d/empleado-d.component';
import { EmpleadoEComponent } from './componentes/catalogo/empleado/empleado-e/empleado-e.component';
import { TipoDireccionAComponent } from './componentes/catalogo/tipo-direccion/tipo-direccion-a/tipo-direccion-a.component';
import { TipoDireccionDComponent } from './componentes/catalogo/tipo-direccion/tipo-direccion-d/tipo-direccion-d.component';
import { TipoDireccionEComponent } from './componentes/catalogo/tipo-direccion/tipo-direccion-e/tipo-direccion-e.component';
import { TaberoJefeComponent } from './componentes/tablero/tabero-jefe/tabero-jefe.component';
import { InformacionGeneralComponent } from './componentes/tablero/informacion-general/informacion-general.component';

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
    TareaDComponent,
    CargoComponent,
    DireccionComponent,
    EmpleadoComponent,
    TipoDireccionComponent,
    CargoAComponent,
    CargoDComponent,
    CargoEComponent,
    DireccionAComponent,
    DireccionDComponent,
    DireccionEComponent,
    EmpleadoAComponent,
    EmpleadoDComponent,
    EmpleadoEComponent,
    TipoDireccionAComponent,
    TipoDireccionDComponent,
    TipoDireccionEComponent,
    TaberoJefeComponent,
    InformacionGeneralComponent
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
    { provide: LOCALE_ID, useValue: 'es-HN' },
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
