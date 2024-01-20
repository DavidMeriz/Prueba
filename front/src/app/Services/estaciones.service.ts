import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEstaciones } from '../Interfaces/iestaciones';
@Injectable({
  providedIn: 'root'
})
export class EstacionesService {
  private urlBase: string =  'http://localhost:/prueba/backend/Controllers/Estaciones.Controller.php?op=';
  constructor(private clientePhp: HttpClient) {}
  todos(): Observable<IEstaciones[]> {
    return this.clientePhp.get<IEstaciones[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<IEstaciones> {
    var est = new FormData();
    est.append('ID_estacion', id.toString());
    return this.clientePhp.post<IEstaciones>(this.urlBase + 'uno', est);
  }
  insertar(estacion: IEstaciones): Observable<any> { //estacion o estaciones 
    var est = new FormData();
    est.append('Nombre', estacion.Nombre.toString());
    est.append('Ciudad', estacion.Ciudad.toString());
    est.append('Capacidad', estacion.Capacidad.toString());
    return this.clientePhp.post(this.urlBase + 'insertar', est);
  }
  actualizar(estacion: IEstaciones, id:number): Observable<any> {
    var est = new FormData();
    est.append('ID_estacion', id.toString());
    est.append('Nombre', estacion.Nombre.toString());
    est.append('Ciudad', estacion.Ciudad.toString());
    est.append('Capacidad', estacion.Capacidad.toString());
    return this.clientePhp.post(this.urlBase + 'actualizar', est);
  }
  eliminar(id: number): Observable<any> {
    var est = new FormData();
    est.append('ID_estacion', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', est);
  }
}
