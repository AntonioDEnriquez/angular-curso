import { Component } from '@angular/core';
// Importamos la interface que nos llevamos al archivo de interfaces para utilizarla aqui
import { Personaje } from '../interfaces/dbz.interface';
// Me lleve la interface Personaje a la carpeta interfaces dbz.interface.ts

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // me lleve los personajes al servicio


  nuevo: Personaje = {
    nombre: 'Maestro Roshin',
    poder: 1000,
  }

  // Obtenemos la informacion de personajes desde el servicio
  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  // agregar() {

  //   if (this.nuevo.nombre.trim().length === 0) { return; }

  //   console.log(this.nuevo);
  //   this.personajes.push(this.nuevo);
  //   this.nuevo = {
  //     nombre: '',
  //     poder: 0
  //   }
  // Me lo lleve al componente de agregar
  // }

  // agregarNuevoPersonaje(argumento: Personaje) {
  // debugger es un a palabra reservada de javaScript y sirver basicamente como un breakpoint
  // debugger;

  // this.personajes.push(argumento);
  // }

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);

  // }

  // Definir una propiedad y asignarle el valor se conoce como una inyeccion de dependencias y esto es super fuerte, estamos inyectando el servicio en este componente
  constructor() {
  }

}
