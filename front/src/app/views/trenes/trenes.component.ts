import { Component } from '@angular/core';
import { ITrenes} from '../../Interfaces/itrenes';
import { TrenesService } from '../../Services/trenes.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-trenes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './trenes.component.html',
  styleUrl: './trenes.component.css',
})
export class TrenesComponent {
  title = 'Trenes';
  trenes: ITrenes[];

  constructor(private TrenesServicio: TrenesService) {}

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.TrenesServicio.todos().subscribe((listatrenes) => {
      this.trenes = listatrenes;
      console.log(listatrenes);
    });
  }
  alerta() {
    Swal.fire('Trenes', 'Mensaje en trenes', 'success');
  }

  eliminar(ID_tren: number) {
    Swal.fire({
      title: 'Trenes',
      text: 'Esta seguro que desea eliminar la estacion',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.TrenesServicio.eliminar(ID_tren).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'trenes',
            text: 'Se eliminó con éxito el registro',
            icon: 'success',
          });
        });
      } else {
        Swal.fire({
          title: 'trenes',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}