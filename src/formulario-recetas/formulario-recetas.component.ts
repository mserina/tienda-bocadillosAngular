import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecetaServiceService } from '../app/servicios/receta.service.service';
import { Receta } from '../app/modelos/receta';


@Component({
  selector: 'app-formulario-recetas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-recetas.component.html',
  styleUrl: './formulario-recetas.component.css'
})
export class FormularioRecetasComponent {

  // Formulario para crear una nueva receta   
  recetaServ = inject(RecetaServiceService);
  
  //Crear receta
  recetaACrear: Receta = {
    nombreDeLaReceta:'',
    ingredientesDeLaReceta: '',
    pasosDelaReceta: ''
  };

  //Añadir receta a la lista
  addCliente() {
    console.log(this.recetaACrear);
    this.recetaServ.añadirRecetas(this.recetaACrear);
  }
  
}
