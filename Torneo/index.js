import { Torneo } from './Torneo.js';
import { Equipo } from './Equipo.js';

// Datos JSON del torneo y equipos
const datos = {
    "torneo": {
        "nombre": "Torneo de Pádel 2025",
        "fecha": "2025-05-12",
        "ubicacion": "Madrid"
    },
    "equipos": [
        {
            "nombre": "Los Titanes",
            "jugadores": [
                { "nombre": "Carlos", "edad": 25, "nivel": 4, "puntaje": 1200, "victorias": 12 },
                { "nombre": "Lucía", "edad": 24, "nivel": 3, "puntaje": 1000, "victorias": 10 }
            ],
            "victorias": 5,
            "derrotas": 2,
            "puntos": 12
        },
        {
            "nombre": "Los Guerreros",
            "jugadores": [
                { "nombre": "Andrés", "edad": 30, "nivel": 5, "puntaje": 1500, "victorias": 15 },
                { "nombre": "Sofía", "edad": 22, "nivel": 2, "puntaje": 800, "victorias": 9 }
            ],
            "victorias": 4,
            "derrotas": 3,
            "puntos": 10
        }
    ]
};

// Función para cargar los datos del torneo
function cargarTorneo() {
    const data = datos;

    // Crear el torneo
    const torneo = new Torneo(data.torneo.nombre, data.torneo.fecha, data.torneo.ubicacion);

    // Crear los equipos a partir de los datos del JSON
    data.equipos.forEach(equipoData => {
        const jugadores = equipoData.jugadores.map(jugador => {
            return { nombre: jugador.nombre, edad: jugador.edad, nivel: jugador.nivel, puntaje: jugador.puntaje, victorias: jugador.victorias };
        });
        const equipo = new Equipo(equipoData.nombre, jugadores, equipoData.victorias, equipoData.derrotas, equipoData.puntos);
        torneo.agregarEquipo(equipo);
    });

    return torneo;
}

// Función para mostrar resultados en el DOM
function muestraResultadoDOM(identificador, resultado) {
    let content = document.getElementById(identificador);
    let p = document.createElement("p");
    p.innerHTML = resultado;
    content.appendChild(p);
}

// Función para inicializar el torneo y mostrar los resultados
function init() {
    const torneo = cargarTorneo();

    // Listar equipos ordenados alfabéticamente
    muestraResultadoDOM("alfabetico", "Equipos ordenados alfabéticamente:");
    const equiposAlfabeticos = torneo.listarEquipos();
    equiposAlfabeticos.forEach(equipo => muestraResultadoDOM("alfabetico", equipo.mostrarEquipo()));

    // Buscar un equipo específico
    const equipoBuscado = torneo.buscarEquipo("Los Titanes");
    if (equipoBuscado) {
        muestraResultadoDOM("buscado", `Equipo encontrado: ${equipoBuscado.mostrarEquipo()}`);
    } else {
        muestraResultadoDOM("buscado", "Equipo no encontrado");
    }

    // Mostrar el mejor equipo por victorias
    const mejorEquipo = torneo.mejorEquipo();
    muestraResultadoDOM("mejor", `Mejor equipo: ${mejorEquipo.mostrarEquipo()}`);

    // Mostrar los equipos ordenados por promedio de victorias de sus jugadores
    muestraResultadoDOM("promedio", "Equipos ordenados por promedio de victorias de sus jugadores:");
    const equiposPorPromedio = torneo.equiposOrdenadosPorPromedioVictorias();
    equiposPorPromedio.forEach(equipo => muestraResultadoDOM("promedio", `${equipo.mostrarEquipo()} - Promedio victorias: ${equipo.calcularPromedioVictorias()}`));
}

// Ejecutar la función init cuando la página esté lista
window.onload = init;
