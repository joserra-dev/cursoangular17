import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto011';

  conversion = '';
  potenciaNumero = '';
  cantidad = '';

  formularioConversion = new FormGroup({
    numerodecimal: new FormControl(''),
    base: new FormControl('octal'),
    potencia: new FormControl ('2'),
    largo: new FormControl(true)
  });

  submit(){

    if (this.formularioConversion.value.numerodecimal){
      if (this.formularioConversion.value.base == "hexadecimal")
        this.conversion = parseInt(this.formularioConversion.value.numerodecimal).toString(16);
      if (this.formularioConversion.value.base == "octal")
        this.conversion = parseInt(this.formularioConversion.value.numerodecimal).toString(8);
      if (this.formularioConversion.value.numerodecimal && this.formularioConversion.value.potencia)
        this.potenciaNumero = Math.pow(parseInt(this.formularioConversion.value.numerodecimal), parseInt(this.formularioConversion.value.potencia)).toString();
      if (this.formularioConversion.value.largo)
        this.cantidad = this.formularioConversion.value.numerodecimal.length.toString();
    }
  }
}
