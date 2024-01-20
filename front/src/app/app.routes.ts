import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EstacionesComponent } from './views/estaciones/estaciones.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { NuevaEstacionComponent  } from './views/estaciones/nueva-estacion/nueva-estacion.component';
import { NuevoTrenComponent  } from './views/trenes/nuevo-tren/nuevo-tren.component';
import { TrenesComponent } from './views/trenes/trenes.component';



export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'estaciones', 
  component: EstacionesComponent },
  {
    path: 'nueva-estacion',
    component: NuevaEstacionComponent,
  },
  {
    path: 'editar-estacion/:id',
    component: NuevaEstacionComponent,
  },
  { path: 'trenes', 
  component: TrenesComponent },
  {
    path: 'nuevo-tren',
    component: NuevoTrenComponent,
  },
  {
    path: 'editar-tren/:id',
    component: NuevoTrenComponent,
  },

  
  
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];