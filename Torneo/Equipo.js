// Equipo.js
export class Equipo {
    constructor(nombre, jugadores = [], victorias = 0, derrotas = 0, puntos = 0) {
        this.nombre = nombre;
        this.jugadores = jugadores;
        this.victorias = victorias;
        this.derrotas = derrotas;
        this.puntos = puntos;
    }

    // Método para agregar un jugador al equipo
    agregarJugador(jugador) {
        this.jugadores.push(jugador);
    }

    // Método para calcular el puntaje medio de los jugadores del equipo
    calcularPuntajeMedio() {
        if (this.jugadores.length === 0) return 0;
        const totalPuntaje = this.jugadores.reduce((total, jugador) => total + jugador.puntaje, 0);
        return totalPuntaje / this.jugadores.length;
    }

    // Método para calcular el promedio de victorias de los jugadores
    calcularPromedioVictorias() {
        if (this.jugadores.length === 0) return 0;
        const totalVictorias = this.jugadores.reduce((total, jugador) => total + jugador.victorias, 0);
        return totalVictorias / this.jugadores.length;
    }

    // Método para mostrar el equipo
    mostrarEquipo() {
        return `${this.nombre} - Jugadores: ${this.jugadores.map(j => j.nombre).join(', ')}`;
    }

    // Método para actualizar estadísticas del equipo después de un partido
    actualizarEstadisticas(ganados, perdidos, puntos) {
        this.victorias += ganados;
        this.derrotas += perdidos;
        this.puntos += puntos;
    }
}

