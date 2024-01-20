import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITrenes } from '../Interfaces/itrenes';
@Injectable({
  providedIn: 'root'
})
export class TrenesService {
  private urlBase: string =  'http://localhost:/prueba/backend/Controllers/Trenes.Controller.php?op=';
  constructor(private clientePhp: HttpClient) {}
  todos(): Observable<ITrenes[]> {
    return this.clientePhp.get<ITrenes[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<ITrenes> {
    var tren = new FormData();
    tren.append('ID_tren', id.toString());
    return this.clientePhp.post<ITrenes>(this.urlBase + 'uno', tren);
  }
  insertar(trenes: ITrenes): Observable<any> {
    var tren = new FormData();
    tren.append('ID_estacion', trenes.ID_estacion.toString());
    tren.append('Modelo', trenes.Modelo.toString());
    tren.append('Capacidad_pasajeros', trenes.Capacidad_pasajeros.toString());
    tren.append('Fecha_fabricacion' , trenes.Fecha_fabricacion.toString());
    return this.clientePhp.post(this.urlBase + 'insertar', tren);
  }
  actualizar( trenes: ITrenes, id : number): Observable<any> {
    var tren = new FormData();
    tren.append('ID_tren', id.toString());
    tren.append('ID_estacion', trenes.ID_estacion.toString());
    tren.append('Modelo', trenes.Modelo.toString());
    tren.append('Capacidad_pasajeros', trenes.Capacidad_pasajeros.toString());
    tren.append('Fecha_fabricacion' , trenes.Fecha_fabricacion.toString());
    return this.clientePhp.post(this.urlBase + 'actualizar', tren);
  }
  eliminar(id: number): Observable<any> {
    var tren = new FormData();
    tren.append('ID_tren', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', tren);
  }
}
