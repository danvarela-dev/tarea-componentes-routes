import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="title">
    <h1>Productos</h1>
  </div>
 
  <productos-list></productos-list>
  
  `,
  styles: [`
    .title{
    margin: auto;
    width: 50%;
    padding: 10px;
    text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'componentes-routes';
}
