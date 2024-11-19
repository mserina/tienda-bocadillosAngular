import { Component, inject } from '@angular/core';
import { RecetaServiceService } from '../app/servicios/receta.service.service';
import { Receta } from '../app/modelos/receta';

@Component({
  selector: 'app-listado-receta',
  standalone: true,
  imports: [],
  templateUrl: './listado-receta.component.html',
  styleUrl: './listado-receta.component.css'
})
export class ListadoRecetaComponent {

  //Injeccion del servicio receta al componente listado
  recetaServ = inject(RecetaServiceService);

  //Lista de Receta vacia
  recetaLista: Receta[]= [];

  //ngOnInit, se ejecutara nada mas se cargue este componente
  ngOnInit() {
    //Llamada al servicio para obtener la lista de recetas, estas se cargaran en la lista vacia que creamos anteriormente para posteriormente mostrarlo en el html
    this.recetaLista = this.recetaServ.devolverRecetas();
  }
}
