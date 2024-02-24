import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from "./dado/dado.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DadoComponent, CommonModule]
})
export class AppComponent {
  title = 'proyecto002';
}
