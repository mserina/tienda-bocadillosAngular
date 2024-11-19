import { Routes } from '@angular/router';
import { ListadoRecetaComponent } from '../listado-receta/listado-receta.component';
import { FormularioRecetasComponent } from '../formulario-recetas/formulario-recetas.component';


export const routes: Routes = [

    //Las rutas de los componentes en el app componene, permite cambiar de un componente a otro a otro
    {path: 'ListaRecetas', component: ListadoRecetaComponent},
    {path: 'FormularioRecetas', component: FormularioRecetasComponent},

];
