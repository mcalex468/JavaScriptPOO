import { Torneo } from './Torneo.js';
import { Equipo } from './Equipo.js';
import { Jugador } from './Jugador.js';

// Crear jugadores
const jugador1 = new Jugador("Carlos", 25, 4, 1200);
const jugador2 = new Jugador("Lucía", 24, 3, 1000);
const jugador3 = new Jugador("Andrés", 30, 5, 1500);
const jugador4 = new Jugador("Sofía", 22, 2, 800);

// Crear equipos
const equipo1 = new Equipo("Los Titanes", [jugador1, jugador2], 5, 2, 12);
const equipo2 = new Equipo("Los Guerreros", [jugador3, jugador4], 4, 3, 10);

// Crear torneo
const torneo = new Torneo("Torneo de Pádel", "2025-05-12", "Madrid");

// Agregar equipos al torneo
torneo.agregarEquipo(equipo1);
torneo.agregarEquipo(equipo2);

// Mostrar equipos ordenados alfabéticamente
console.log("Equipos ordenados alfabéticamente:");
const equiposAlfabeticos = torneo.listarEquipos();
equiposAlfabeticos.forEach(equipo => console.log(equipo.mostrarEquipo()));

// Buscar un equipo específico
const equipoBuscado = torneo.buscarEquipo("Los Titanes");
if (equipoBuscado) {
    console.log("Equipo encontrado:", equipoBuscado.mostrarEquipo());
} else {
    console.log("Equipo no encontrado");
}

// Mostrar el mejor equipo por victorias
const mejorEquipo = torneo.mejorEquipo();
console.log("Mejor equipo:", mejorEquipo.mostrarEquipo());

// Filtrar equipos con victorias
console.log("Equipos con victorias:");
const equiposConVictorias = torneo.equiposPorVictorias();
equiposConVictorias.forEach(equipo => console.log(equipo.mostrarEquipo()));
