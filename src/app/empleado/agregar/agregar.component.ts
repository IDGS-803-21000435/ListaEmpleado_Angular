import { Component } from '@angular/core';
import { IEmpleado } from '../interface/IEmpleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  nuevoEmpleado: IEmpleado = {
    nombre: '',
    correo: '',
    telefono: '',
    fechaIngreso: '',
    sexo: '',
  };

  constructor(private empleadoService: EmpleadoService) {}

  agregar() {
    if (this.nuevoEmpleado.nombre.trim().length === 0) {
      return;
    }

    this.empleadoService.agregarEmpleado(this.nuevoEmpleado);

    this.nuevoEmpleado = {
      nombre: '',
      correo: '',
      telefono: '',
      fechaIngreso: '',
      sexo: '',
    };
  }
}
