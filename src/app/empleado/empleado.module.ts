import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgregarComponent } from './agregar/agregar.component';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { EmpleadoService } from './empleado.service';

@NgModule({
  declarations: [AgregarComponent, ListaEmpleadoComponent],
  imports: [CommonModule,FormsModule],
  exports: [AgregarComponent, ListaEmpleadoComponent],
  providers: [EmpleadoService],
})
export class EmpleadoModule { }
