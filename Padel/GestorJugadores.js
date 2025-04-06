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
        if (typeof nombreJugador === "string") {
            let index = this.jugadoresLista.findIndex(jugador => jugador.nombre === nombreJugador);
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
        return this.jugadoresLista.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }


    /* COPIA
    listarJugadores() {
    return [...this.jugadoresLista].sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    */

    // Método para obtener jugadores de un nivel específico
    jugadoresPorNivel() {
        let listaJugadoresNivel = this.jugadoresLista.sort((a, b) => b.nivel - a.nivel);
        return listaJugadoresNivel;
    }

    jugadoresPorValoracionMedia() {
        let jugadoresMedia = this.jugadoresLista.sort((a, b) => {
            let valA = a.calcularValoracionMedia()
            let valB = b.calcularValoracionMedia()
            return valB - valA
        });
        return jugadoresMedia;
    }

    // Método para obtener el mejor jugador según victorias
    mejorJugador() {
        return this.jugadoresLista.reduce((mejor, jugador) =>
            (jugador.victorias > mejor.victorias ? jugador : mejor), this.jugadoresLista[0]);
    }
    /*
    mejorJugador() {
        return this.jugadoresLista.sort((a, b) => b.victorias - a.victorias);
    }
    */



}
