import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule,Validators,} from '@angular/forms';
import { EstacionesService } from '../../../Services/estaciones.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nueva-estacion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nueva-estacion.component.html',
  styleUrl: './nueva-estacion.component.css'
})
export class NuevaEstacionComponent {
  title ='Nueva estacion';
  id!: number;
  estacion: FormGroup = new FormGroup({
    Nombre: new FormControl('', Validators.required),
    Ciudad: new FormControl('', Validators.required),
    Capacidad: new FormControl('', Validators.required),

});
  constructor(
    private EstacionesServicio: EstacionesService,
    private rutas: Router,
    private parametros: ActivatedRoute
  ){}
  ngOnInit(){
    this.id = this.parametros.snapshot.params['id'];
    console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nueva Estacion';
    }else{
      this.title = 'Actualizar estacion';
      this.EstacionesServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.estacion.patchValue({
          Nombre: res.Nombre,
          Ciudad: res.Ciudad,
          Capacidad: res.Capacidad,
        });
      });
    }
  }
  get f() {
    return this.estacion.controls;
  }
  grabar() {
    Swal.fire({
      title: 'Estacion',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.EstacionesServicio
            .insertar(this.estacion.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'Estacion',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/estaciones']);
              this.id = 0;
            });
        } else {
          this.EstacionesServicio
           .actualizar(this.estacion.value,this.id)

            .subscribe((res) => {
              Swal.fire({
                title: 'estacion',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/estaciones']);
              this.id = 0;
            });
          }
        }else{
          Swal.fire({
            title: 'estacion',
            text: 'El usuario canceló la acción',
            icon: 'info',
          });
        }
      });
    }
  }