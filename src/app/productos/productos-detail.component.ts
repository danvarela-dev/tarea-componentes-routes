import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'productos-detail',
  template: `
   <h1>  Productos Detalles  </h1>


  `,
  styles: [
    `
      `,
  ],
})
export class ProductoDetailComponent {
  @Input() productInput: any;
  @Output() evtClaseUx = new EventEmitter();


  
}
