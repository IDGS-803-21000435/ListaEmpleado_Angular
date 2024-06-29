import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoModule } from './empleado/empleado.module';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadoModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Empleados_Angular';
}
