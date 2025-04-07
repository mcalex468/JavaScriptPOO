// Torneo.js
import { Equipo } from './Equipo.js';

export class Torneo {
    constructor(nombre, fecha, ubicacion) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.ubicacion = ubicacion;
        this.equipos = [];
    }

    // Agregar un equipo al torneo
    agregarEquipo(equipo) {
        if (equipo instanceof Equipo) {
            this.equipos.push(equipo);
        } else {
            console.error("El objeto proporcionado no es una instancia de Equipo");
        }
    }

    // Mostrar los equipos ordenados alfabéticamente
    listarEquipos() {
        return this.equipos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    // Buscar un equipo por nombre
    buscarEquipo(nombre) {
        return this.equipos.find(equipo => equipo.nombre === nombre);
    }

    // Mostrar el mejor equipo según victorias
    mejorEquipo() {
        return this.equipos.reduce((mejor, equipo) => {
            return equipo.victorias > mejor.victorias ? equipo : mejor;
        }, this.equipos[0]);
    }

    // Ordenar equipos por el promedio de victorias de sus jugadores
    equiposOrdenadosPorPromedioVictorias() {
        return this.equipos.sort((a, b) => b.calcularPromedioVictorias() - a.calcularPromedioVictorias());
    }
}
