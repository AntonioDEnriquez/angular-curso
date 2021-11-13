import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { PersonajesComponent } from '../personajes/personajes.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }

  // EL output es otro decorador que funciona literalmente igual le podemos poner el nombre del alias pero si no le especificamos nada sera el nombre del evento que nosotros vamos a exponer
  // El EvenEmitter es un generico osea que puede ser cualquier cosa que nosotros queramos, por ejemplo podria ser que nosotros queramos emitir strings entoces podriamos poner EvenEmmiter<string>
  // El output sirve para emitir eventos
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService) { }

  agregar() {

    if (this.nuevo.nombre.trim().length === 0) { return; }

    console.log(this.nuevo);
    // Emite un valor opcional, Personaje o undifined
    // this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);

  // }

}
