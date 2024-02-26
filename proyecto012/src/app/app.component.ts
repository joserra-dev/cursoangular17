import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto012';

  resultado = '';

  formAlumno = new FormGroup({
    dni: new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl('')
    })
  });
  submit(){
    if (this.formAlumno.value.notas){
      if (this.formAlumno.value.notas.nota1 && 
        this.formAlumno.value.notas.nota2 &&
        this.formAlumno.value.notas.nota3){
          let nota1 = parseInt(this.formAlumno.value.notas.nota1);
          let nota2 = parseInt(this.formAlumno.value.notas.nota2);
          let nota3 = parseInt(this.formAlumno.value.notas.nota3);
          if (nota1 >=4 && nota2 >= 4 && nota3 >= 4)
            this.resultado = "el alumno queda aprobado con esas notas: ";
          else
            this.resultado = "el alumno no aprueba por esas notas";
        }
    }
  }
}
