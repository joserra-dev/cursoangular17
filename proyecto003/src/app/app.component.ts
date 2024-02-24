import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto003';
  valor1: number = this.retornarAleatorio()
  valor2: number = this.retornarAleatorio()
  valor3: number = this.retornarAleatorio()
  resultado: string ="";

  retornarAleatorio() { 
    return Math.floor(Math.random() * 6) + 1;

  }
  tirar(){
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio(); 
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3)
      this.resultado = 'Gano'
    else 
      this.resultado = 'Perdió';
  }
}
