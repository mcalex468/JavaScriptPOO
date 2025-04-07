// Jugador.js
export class Jugador {
    constructor(nombre, edad, nivel, puntaje) {
        this.nombre = nombre;
        this.edad = edad;
        this.nivel = nivel;
        this.puntaje = puntaje;
    }

    // Método para actualizar el puntaje de un jugador
    actualizarPuntaje(nuevoPuntaje) {
        this.puntaje = nuevoPuntaje;
    }

    // Método para mostrar los detalles del jugador
    mostrarJugador() {
        return `${this.nombre} - Edad: ${this.edad}, Nivel: ${this.nivel}, Puntaje: ${this.puntaje}`;
    }
}
