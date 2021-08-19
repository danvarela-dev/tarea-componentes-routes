import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productos } from '../models/productosModel';

@Component({
  selector: 'productos-list',
  template: `
  
    <table class="table container">
      <thead>
        <tr>
          <th scope="col">
            <button ng-hide class="btn btn-primary">Ocultar Imagen</button>
          </th>
          <th scope="col">Nombre Producto</th>
          <th scope="col">Codigo</th>
          <th scope="col">Fecha Vencimiento</th>
          <th scope="col">Precio</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let prod of productsList">
          <td><img id="imgID" src="{{ prod.UrlProducto }}" /></td>
          <td>{{ prod.NombreProducto }}</td>
          <td>{{ prod.IdProducto }}</td>
          <td>{{ prod.FechaVencimiento }}</td>
          <td>{{ prod?.PrecioProducto }}</td>
          <td></td>
          <td>
            <button (click)="onClick(prod)" class="btn btn-primary">
              Click Me
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
    `
      #imgID {
        width: 100px;
        height: 100px;
        background-color: red;
        text-align: center;
        vertical-align: middle;
      }
    `,
  ],
})
export class ProductListComponent {
  constructor(private router: Router) {}

  onClick(data) {
  this.router.navigate(['Productos/', data.IdProducto]);
   

    if (!this.productExists(data.IdProducto)) {
      console.log("exists")
      this.router.navigate(['404/']);
      debugger;
    }
  }

  productExists(data) {
    for (let i = 0; i < this.productsList.length; i++) {
     if(this.productsList[i].IdProducto === data){
       return true;
     }
    }
    return false;
  }

  productsList: productos[] = [
    {
      IdProducto: '0033-0021',
      NombreProducto: 'IMMUVIT PLUS Q10 X 30 CAPSULAS',
      PrecioProducto: 366.26,
      CantidadProducto: 1,
      DescripcionProducto: 'Descripcion: IMMUVIT PLUS Q10 X 30 CAPSULAS',
      OrigenProducto: 'China',
      UrlProducto:
        'https://d2wuoo4cuot0vy.cloudfront.net/0033-0021/0033-0021_397467954.jpg',
      FechaVencimiento: 'Marzo 22,2020',
    },
    {
      IdProducto: '010-3542',
      NombreProducto: 'BRONCOPULMIN MENTORUB UNGUENTO TARRO X 25G',
      PrecioProducto: 35.0,
      CantidadProducto: 1,
      DescripcionProducto:
        'Descripcion: BRONCOPULMIN MENTORUB UNGUENTO TARRO X 25G',
      OrigenProducto: 'China',
      UrlProducto:
        'https://d2wuoo4cuot0vy.cloudfront.net/0010-3542/0010-3542_1.thumbail.jpg',
      FechaVencimiento: 'Marzo 22,2020',
    },
    {
      IdProducto: '0010-0606',
      NombreProducto: 'NAPROX 550MG CAJA POR 12 CAPLETAS',
      PrecioProducto: 146.34,
      CantidadProducto: 1,
      DescripcionProducto: 'Descripcion: NAPROX 550MG CAJA POR 12 CAPLETAS',
      OrigenProducto: 'China',
      UrlProducto:
        'https://d2wuoo4cuot0vy.cloudfront.net/0010-0606/0010-0606_1.jpg',
      FechaVencimiento: 'Marzo 22,2020',
    },
    {
      IdProducto: '0024-1139',
      NombreProducto: 'DOLO-NEUROBION X 1 GRAGEA',
      PrecioProducto: 13.12,
      CantidadProducto: 1,
      DescripcionProducto: 'Descripcion: DOLO-NEUROBION X 1 GRAGEA',
      OrigenProducto: 'China',
      UrlProducto:
        'https://d2wuoo4cuot0vy.cloudfront.net/0024-1139/0024-1139_1739204080.jpg',
      FechaVencimiento: 'Marzo 22,2020',
    },
    {
      IdProducto: '1543-0033',
      NombreProducto: 'DYMATIZE ELITE CHOCOLATE FUDGE 5LB',
      PrecioProducto: 1899.5,
      CantidadProducto: 1,
      DescripcionProducto: 'Descripcion: DYMATIZE ELITE CHOCOLATE FUDGE 5LB',
      OrigenProducto: 'China',
      UrlProducto:
        'https://d2wuoo4cuot0vy.cloudfront.net/1543-0033/1543-0033_1.jpg',
      FechaVencimiento: 'Marzo 22,2020',
    },
  ];
}
