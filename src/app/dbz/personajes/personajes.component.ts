import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  // Con poner el input le decimos a angular que los personajes van a venir desde el componente padre, osea quien lo utilice puede mandar esa propiedad
  // Input('data'), lo que hacemos aqui es decirle que ese input se conosca como data, entonces lo podemos asociar como data donde lo utilicemos, se dejo como estaba

  // @Input() personajes: Personaje[] = []; esto lo cambiamos por lo de abajo
  get personajes() {
    return this.dbzService.personajes;
  }


  constructor(private dbzService: DbzService) { }
}
