import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SelectornumericoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto006';

  @ViewChild('Selector1') Selector1!: SelectornumericoComponent
  @ViewChild('Selector2') Selector2!: SelectornumericoComponent

  fijarSelector1(valor:number){
    this.Selector1.fijar(valor);
  }

  fijarSelector2(valor:number){
    this.Selector2.fijar(valor);
  }
}

