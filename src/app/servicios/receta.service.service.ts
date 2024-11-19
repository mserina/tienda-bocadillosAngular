import { Injectable } from '@angular/core';
import { Receta } from '../modelos/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaServiceService {

  //lista donde se guardaran las recetas
  private recetasLista: Receta[] = [];
  
  //Para añadir recetas
  añadirRecetas(recetaCreada: Receta){
    this.recetasLista.push(recetaCreada);
    alert('La receta se ha añadido correctamente');
  }

  //Para mostrar recetas
  devolverRecetas(){
    return this.recetasLista;
  }
}

