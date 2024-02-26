import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto010';

  datos = '';

  formularioContacto = new FormGroup({
    nombre: new FormControl (''),
    mail: new FormControl(''),
    mensaje: new FormControl('')

  });

  submit() {
    this.datos = `Nombre=${this.formularioContacto.value.nombre}
                  Mail=${this.formularioContacto.value.mail} 
                  Mensaje=${this.formularioContacto.value.mensaje}`
  }
}
