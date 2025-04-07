// Mismo nombre que la clase 
import { GestorJugadores } from "./GestorJugadores.js";
import { Jugador } from "./Jugador.js";

const jugadores = [
    { "nombre": "Carlos", "apellidos": "Fernández", "edad": 28, "email": "carlos.fernandez@email.com", "nivel": 4, "partidosJugados": 20, "victorias": 15, "valoracion": [7, 8, 5] },
    { "nombre": "Lucía", "apellidos": "Gómez", "edad": 25, "email": "lucia.gomez@email.com", "nivel": 3, "partidosJugados": 18, "victorias": 10, "valoracion": [8, 3, 10] },
    { "nombre": "Andrés", "apellidos": "Martínez", "edad": 32, "email": "andres.martinez@email.com", "nivel": 5, "partidosJugados": 25, "victorias": 22, "valoracion": [7, 2, 9] },
    { "nombre": "Sofía", "apellidos": "López", "edad": 22, "email": "sofia.lopez@email.com", "nivel": 2, "partidosJugados": 10, "victorias": 4, "valoracion": [4, 6, 9] },
    { "nombre": "Javier", "apellidos": "Ruiz", "edad": 30, "email": "javier.ruiz@email.com", "nivel": 3, "partidosJugados": 15, "victorias": 9, "valoracion": [6, 8, 8] }
];

function muestraResultadoDOM(identificador, resultado) {
    let content = document.getElementById(identificador);
    let p = document.createElement("p");
    p.innerHTML = resultado;
    content.appendChild(p);
}

function init() {
    // De Array de Obj a JSON
    const jugadoresJSON = JSON.stringify(jugadores);
    // De JSON a Array de Obj
    const jugadoresObj = JSON.parse(jugadoresJSON);
    // Inicializamos Gestor
    let gestorJugadores = new GestorJugadores();

    jugadoresObj.forEach(jugador => {
        let jugadorNuevo = new Jugador(jugador.nombre, jugador.apellidos, jugador.edad, jugador.email, jugador.nivel, jugador.partidosJugados, jugador.victorias, jugador.valoracion);
        gestorJugadores.agregarJugador(jugadorNuevo);
    });
    /*
    for (let i = 0; i < jugadoresObj.length; i++) {
        let jugador = jugadoresObj[i];
        let jugadorNuevo = new Jugador(
            jugador.nombre, 
            jugador.apellidos, 
            jugador.edad, 
            jugador.email, 
            jugador.nivel, 
            jugador.partidosJugados, 
            jugador.victorias, 
            jugador.valoracion
        );
        gestorJugadores.agregarJugador(jugadorNuevo);
    }
    */
    // Comprobamos si esta cargado
    console.log(gestorJugadores.jugadoresLista);

    // Mostrar todos los jugadores
    gestorJugadores.jugadoresLista.forEach(jugador => {
        muestraResultadoDOM('jugadores', jugador.toString());
    });

    // Lista de jugadores ordenados alfabéticamente
    const jugadoresAlfabeticos = gestorJugadores.listarJugadores();
    muestraResultadoDOM('alfabetico', "Jugadores ordenados alfabéticamente:");
    jugadoresAlfabeticos.forEach(jugador => muestraResultadoDOM('alfabetico', jugador.toString()));

    // Lista de jugadores por nivel
    const jugadoresPorNivel = gestorJugadores.jugadoresPorNivel();
    muestraResultadoDOM('nivel', "Jugadores ordenados por nivel (descendente):");
    jugadoresPorNivel.forEach(jugador => muestraResultadoDOM('nivel', jugador.toString()));

    // Lista de jugadores por valoración media
    const jugadoresPorValoracion = gestorJugadores.jugadoresPorValoracionMedia();
    muestraResultadoDOM('valoracion', "Jugadores ordenados por valoración media:");
    jugadoresPorValoracion.forEach(jugador => muestraResultadoDOM('valoracion', `${jugador.toString()} - Media: ${jugador.calcularValoracionMedia()}`));

    // Mejor jugador por victorias // Devuelve 1 OBJ (NO Array)
    const mejorJugador = gestorJugadores.mejorJugador();
    muestraResultadoDOM('mejor', `Mejor jugador por victorias: ${mejorJugador.toString()} - Victorias: ${mejorJugador.victorias}`);

    // Eliminar un jugador
    gestorJugadores.eliminarJugador("Sofía");
    muestraResultadoDOM('eliminar', "Lista después de eliminar a Sofía:");
    gestorJugadores.jugadoresLista.forEach(jugador => {
        muestraResultadoDOM('eliminar', jugador.toString());
    });

    // Buscar Jugador
    const jugadorB = gestorJugadores.buscarJugador("Carlos");
    if (jugadorB) {
        muestraResultadoDOM('buscado', `Jugador encontrado ${jugadorB.toString()} - Email ${jugadorB.email} `)
    }

    /*
    // Buscar jugador en el INIT 
    const jugadorBuscado = gestorJugadores.jugadoresLista.find(jugador => jugador.nombre === "Carlos");
    if (jugadorBuscado) {
        muestraResultadoDOM('buscado', `Jugador encontrado: ${jugadorBuscado.toString()} - Email: ${jugadorBuscado.email}`);
    } else {
        muestraResultadoDOM('buscado', "Jugador no encontrado.");
    }
    */
}

init();