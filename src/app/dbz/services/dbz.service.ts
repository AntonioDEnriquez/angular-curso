import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    // Hacemos privada la propiedad personaje por que no queremos que se pueda manipular, se le coloca _ como estandar
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'vegeta',
            poder: 8500
        }
    ];

    get personajes(): Personaje[] {
        // para evitar y romper la relacion que tiene javaScript lo ponemos de la siguiente manera, asi con las llaves indicamos que es un arreglo, los 3 puntos son el operador spread, es decir
        // separa cada uno de los elementos que tiene este arreglo y create uno nuevo
        return [...this._personajes];
    }


    constructor() { }


    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}