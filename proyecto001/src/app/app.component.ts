import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  nombre = 'Rodriguez PAblo';
  
  Edad = 40;
  articulos = [{
    codigo: 1,
    descripcion: 'naranjas',
    precio: 540
  }, {
    codigo: 2,
    descripcion: 'manzanas',
    precio: 900
  }, {
    codigo: 3,
    descripcion: 'peras',
    precio: 490
  }];

  generarNumero(){
    return Math.floor(Math.random() * 3) + 1;
  }
}

