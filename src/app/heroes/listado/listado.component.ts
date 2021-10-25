import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['SpiderMan', 'IronMan', 'Thor', 'Gokú'];
  heroeBorrado: string = '';

  borrarHeroe() {
    // Si esto retorna undefined podemos regresar un string vacio
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
