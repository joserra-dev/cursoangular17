import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CronometroComponent } from './cronometro/cronometro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CronometroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'proyecto004';
  mensaje='';

  actualizar(t:number){
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}
