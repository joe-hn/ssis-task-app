import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableroComponent } from './componentes/tablero/tablero.component';
import { TaberoJefeComponent } from './componentes/tablero/tabero-jefe/tabero-jefe.component';
import { LoginComponent } from './componentes/login/login.component';

import { CatalogoComponent } from './componentes/catalogo/catalogo.component';

import { TipoDireccionAComponent } from './componentes/catalogo/tipo-direccion/tipo-direccion-a/tipo-direccion-a.component';
import { TipoDireccionEComponent } from './componentes/catalogo/tipo-direccion/tipo-direccion-e/tipo-direccion-e.component';
import { TipoDireccionDComponent } from './componentes/catalogo/tipo-direccion/tipo-direccion-d/tipo-direccion-d.component';

import { DireccionAComponent } from './componentes/catalogo/direccion/direccion-a/direccion-a.component';
import { DireccionEComponent } from './componentes/catalogo/direccion/direccion-e/direccion-e.component';
import { DireccionDComponent } from './componentes/catalogo/direccion/direccion-d/direccion-d.component';

import { CatgoriaTareaOperacionAComponent } from './componentes/catalogo/categoria-tarea-operacion/catgoria-tarea-operacion-a/catgoria-tarea-operacion-a.component';
import { CatgoriaTareaOperacionEComponent } from './componentes/catalogo/categoria-tarea-operacion/catgoria-tarea-operacion-e/catgoria-tarea-operacion-e.component';
import { CatgoriaTareaOperacionDComponent } from './componentes/catalogo/categoria-tarea-operacion/catgoria-tarea-operacion-d/catgoria-tarea-operacion-d.component';

import { CargoAComponent } from './componentes/catalogo/cargo/cargo-a/cargo-a.component';
import { CargoEComponent } from './componentes/catalogo/cargo/cargo-e/cargo-e.component';
import { CargoDComponent } from './componentes/catalogo/cargo/cargo-d/cargo-d.component';

import { EmpleadoAComponent } from './componentes/catalogo/empleado/empleado-a/empleado-a.component';
import { EmpleadoEComponent } from './componentes/catalogo/empleado/empleado-e/empleado-e.component';
import { EmpleadoDComponent } from './componentes/catalogo/empleado/empleado-d/empleado-d.component';

import { TareaAComponent } from './componentes/planificacion/tarea-a/tarea-a.component';
import { TareaEComponent } from './componentes/planificacion/tarea-e/tarea-e.component';
import { TareaDComponent } from './componentes/planificacion/tarea-d/tarea-d.component';
import { PendienteComponent } from './componentes/tablero/pendiente/pendiente.component';

import { EjecucionComponent } from './componentes/tablero/ejecucion/ejecucion.component';
import { TareaDescripcionAComponent } from './componentes/planificacion/tarea-descripcion-a/tarea-descripcion-a.component';
import { TareaRComponent } from './componentes/planificacion/tarea-r/tarea-r.component';
import { TareaFComponent } from './componentes/planificacion/tarea-f/tarea-f.component';
import { TareaDescripcionMComponent } from './componentes/planificacion/tarea-descripcion-m/tarea-descripcion-m.component';
import { TareaDescripcionSolicitudComponent } from './componentes/planificacion/tarea-descripcion-solicitud/tarea-descripcion-solicitud.component';
import { TareaSolicitudComponent } from './componentes/planificacion/tarea-solicitud/tarea-solicitud.component';
import { TareaSolicitudSalidaComponent } from './componentes/planificacion/tarea-solicitud-salida/tarea-solicitud-salida.component';
import { InformacionGeneralComponent } from './componentes/tablero/informacion-general/informacion-general.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tablero', component: TableroComponent },
  { path: 'tablero-jefe', component: TaberoJefeComponent },

  { path: 'tarea-a', component: TareaAComponent },
  { path: 'tarea-e/:id', component: TareaEComponent },
  { path: 'tarea-d/:id', component: TareaDComponent },

  { path: 'ejecucion/:id', component: EjecucionComponent },
  { path: 'tarea-descripcion-a/:id', component: TareaDescripcionAComponent },
  { path: 'tarea-r/:id', component: TareaRComponent },
  { path: 'tarea-f/:id', component: TareaFComponent },
  { path: 'tarea-descripcion-m/:id', component: TareaDescripcionMComponent },
  { path: 'tarea-descripcion-solicitud/:id', component: TareaDescripcionSolicitudComponent },
  { path: 'tarea-solicitud/:id', component: TareaSolicitudComponent },
  { path: 'tarea-salida', component: TareaSolicitudSalidaComponent },

  { path: 'catalogo', component: CatalogoComponent },

  { path: 'tipo-direccion-a', component: TipoDireccionAComponent },
  { path: 'tipo-direccion-e/:id', component: TipoDireccionEComponent },
  { path: 'tipo-direccion-d/:id', component: TipoDireccionDComponent },

  { path: 'direccion-a', component: DireccionAComponent },
  { path: 'direccion-e/:id', component: DireccionEComponent },
  { path: 'direccion-d/:id', component: DireccionDComponent },

  { path: 'categoria-tarea-operacion-a', component: CatgoriaTareaOperacionAComponent },
  { path: 'categoria-tarea-operacion-e/:id', component: CatgoriaTareaOperacionEComponent },
  { path: 'categoria-tarea-operacion-d/:id', component: CatgoriaTareaOperacionDComponent },

  { path: 'cargo-a', component: CargoAComponent },
  { path: 'cargo-e/:id', component: CargoEComponent },
  { path: 'cargo-d/:id', component: CargoDComponent },

  { path: 'empleado-a', component: EmpleadoAComponent },
  { path: 'empleado-e/:id', component: EmpleadoEComponent },
  { path: 'empleado-d/:id', component: EmpleadoDComponent },

  { path: 'pendiente/:id', component: PendienteComponent },
  { path: 'informacion-general/:id', component: InformacionGeneralComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
