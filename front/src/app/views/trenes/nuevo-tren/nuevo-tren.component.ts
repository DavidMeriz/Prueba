import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { TrenesService } from '../../../Services/trenes.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { IEstaciones } from '../../../Interfaces/iestaciones';
import { EstacionesService } from '../../../Services/estaciones.service';
@Component({
  selector: 'app-nuevo-tren',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-tren.component.html',
  styleUrl: './nuevo-tren.component.css'
})
export class NuevoTrenComponent {
  title = 'Nuevo Tren';
  id!:number;
  listaestaciones:any[];
  tren: FormGroup = new FormGroup({
    ID_estacion: new FormControl('', Validators.required),
    Modelo: new FormControl('', Validators.required),
    Capacidad_pasajeros: new FormControl('', Validators.required),
    Fecha_fabricacion: new FormControl('', Validators.required),
  });
  constructor(
    private TrenesServicio: TrenesService,
    private rutas: Router,
    private parametros: ActivatedRoute,
    private EstacionesServicio: EstacionesService,
  ){}
  async ngOnInit(){
    this.id = this.parametros.snapshot.params['id'];
    await this.cargaTrenes(); //CARGAR TRENES
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo tren';
    }else{
      this.title = 'Actualizar tren';
      this.TrenesServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.tren.patchValue({
          ID_estacion: res.ID_estacion,
          Modelo: res.Modelo,
          Capacidad_pasajeros: res.Capacidad_pasajeros,
          Fecha_fabricacion: res.Fecha_fabricacion,
        });
      });
    }
  }

  cargaTrenes(){
    this.EstacionesServicio.todos().subscribe((res) => {
      this.listaestaciones = res;
    });
  }
  get f() {
    return this.tren.controls;
  }
  grabar() {
    Swal.fire({
      title: 'Tren',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.TrenesServicio
            .insertar(this.tren.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'tren',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/trenes']);
              this.id = 0;
            });
        } else {
          this.TrenesServicio
           .actualizar(this.tren.value,this.id)
            .subscribe((res) => {
              Swal.fire({
                title: 'tren',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/trenes']);
              this.id = 0;
            });
          }
        }else{
          Swal.fire({
            title: 'tren',
            text: 'El usuario canceló la acción',
            icon: 'info',
          });
        }
      });
    }
  }