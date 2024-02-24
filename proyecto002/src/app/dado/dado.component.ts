import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {
  valor: number = Math.floor (Math.random() * 6) + 1;

}
