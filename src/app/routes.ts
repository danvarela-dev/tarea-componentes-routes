import { Routes } from '@angular/router';
import { ProductListComponent as ProductoListComponent } from './productos/productos-list.component';
import { ProductoDetailComponent } from './productos/productos-detail.component';
import { Clase404Component } from './error/404.component';

export const AppRoutes: Routes = [
  { path: "", redirectTo: "/Productos", pathMatch: "full" },
  { path: "Productos", component: ProductoListComponent },
  { path: "Productos/:id", component: ProductoDetailComponent },
  { path: "404", component: Clase404Component },
];
