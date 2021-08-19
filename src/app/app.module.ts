import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductListComponent } from './productos/productos-list.component'
import {ProductoDetailComponent } from './productos/productos-detail.component';
import { AppRoutes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoDetailComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
