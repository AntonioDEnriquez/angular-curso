import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'IronMan';
    edad: number = 45;

    // Como es clases podemos crear get y set
    // Al creare un get es basicamente crearme mediante el codigo una propiedad que cuando yo la llame, sera procesada
    // Se pone de tipo string por que retorna un string
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    // Se pone de tipo string por que retorna un string
    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`
    }

    // Se pone de tipo void por que no retorna nada
    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }
    cambiarEdad(): void {
        this.edad = 20;
    }
}