import { FredyComponent } from "./pages/fredy/fredy.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    // {path: '**', component: FredyComponent},
    // *Para crear un componente para una pagina que no esté y que se esté tratando de ingresar, tener cuidado que si se coloca de primeras el path para una pagina que no esté, no va a cargar los otros path como deben ser, se pone al final de todo el listado

    {path: 'fredy', component: FredyComponent},  // todo Es el componente que se creó manual
    { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
    {path: '**', redirectTo:'', pathMatch:'full'}  //* Esta!!! va al final
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

