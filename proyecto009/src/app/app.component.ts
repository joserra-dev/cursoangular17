import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto009';

  actividad = new FormControl();

  lista: string[];

  constructor() {
    this.lista = [];
    let datos = localStorage.getItem("actividades");
    if (datos != null){
      let arreglo = JSON.parse(datos);
      if (arreglo != null)
        for (let actividad of arreglo)
          this.lista.push(actividad);
      }
    }

    agregar() {
      this.lista.push(this.actividad.value);
      localStorage.setItem('actividades', JSON.stringify(this.lista));
      this.actividad.setValue('');
    }  
    borrar(pos: number) {
      this.lista.splice(pos, 1)
      localStorage.clear();
      localStorage.setItem('actividades', JSON.stringify(this.lista));
    }
    borrarTodas() {
      localStorage.clear();
      this.lista = [];
    }

  }

