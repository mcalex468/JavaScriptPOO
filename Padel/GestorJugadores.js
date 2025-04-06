import { Jugador } from "./Jugador.js";

export class GestionJugadores {
    constructor() {
        this.jugadoresLista = [];
    }

    // Método para agregar un jugador si no existe
    agregarJugador(jugador) {
        if (jugador != null) {
            this.jugadoresLista.push(jugador);
        }
    }

    // Método para eliminar un jugador por nombre
    eliminarJugador(nombreJugador) {
        if (typeof nombreJugador == String) {
            this.jugadoresLista = this.jugadoresLista.findIndex(jugador => jugador.nombre === nombreJugador)
            if (index !== -1) {
                this.jugadoresLista.splice(index, 1);
            }
        }
    }
    /*
    eliminarJugador(nombreJugador) {
        if (typeof nombreJugador == String) {
            this.jugadoresLista = this.jugadoresLista.filter(jugador => jugador.nombre !== nombreJugador)
        }
    }
    */

    // Método para listar jugadores ordenados alfabéticamente
    listarJugadores() {
        // TODO: Implementar ordenación
    }

    // Método para obtener jugadores de un nivel específico
    jugadoresPorNivel(nivel) {
        // TODO: Implementar filtrado por nivel
    }

    jugadoresPorValoracionMedia() {
        // TODO: Implementar filtrado por valoración
    }

    // Método para obtener el mejor jugador según victorias
    mejorJugador() {
        // TODO: Implementar búsqueda del mejor jugador
    }


}
