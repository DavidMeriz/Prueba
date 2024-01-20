import { Component } from '@angular/core';
import { IEstaciones} from '../../Interfaces/iestaciones';
import { EstacionesService } from '../../Services/estaciones.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-estaciones',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './estaciones.component.html',
  styleUrl: './estaciones.component.css',
})
export class EstacionesComponent {
  title = 'Estaciones';
  estaciones: IEstaciones[];

  constructor(private EstacionesServicio: EstacionesService) {}

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.EstacionesServicio.todos().subscribe((listaestaciones) => {
      this.estaciones = listaestaciones;

    });
  }
  alerta() {
    Swal.fire('Estacion', 'Mensaje en estacion', 'success');
  }

  eliminar(ID_estacion: number) {
    Swal.fire({
      title: 'Estacion',
      text: 'Esta seguro que desea eliminar la estacion',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.EstacionesServicio.eliminar(ID_estacion).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'estacion',
            text: 'Se eliminó con éxito el registro',
            icon: 'success',
          });
        });
      } else {
        Swal.fire({
          title: 'estacion',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}