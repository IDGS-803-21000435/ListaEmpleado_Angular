import { Component } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { IEmpleado } from '../interface/IEmpleado';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrl: './lista-empleado.component.css'
})
export class ListaEmpleadoComponent {
  constructor(private empleadoService: EmpleadoService) {}

  get empleados() {
    return this.empleadoService.empleados;
  }

  eliminarEmpleado(empleado: IEmpleado) {
    this.empleadoService.eliminarEmpleado(empleado);
  }
}
