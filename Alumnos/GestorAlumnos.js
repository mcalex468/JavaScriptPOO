import { Alumno } from "./Alumno.js";

// Clase GestorAlumnos
export class GestorAlumnos {
    constructor() {
        this.alumnosLista = [];
    }

    // Metodos
    toString() {
        console.log("To String")
        return JSON.stringify(this.alumnosLista);
    }

    valueOf() {
        console.log("ValueOf");
        return this.alumnosLista.length;
    }

    //  Añade un alumno a la estructura
    agregarAlumno(alumno) {
        if (!this.alumnosLista.some(a => a.nombre === alumno.nombre)) {
            this.alumnosLista.push(alumno);
        } else {
            console.log("Nombre alumno ya existe")
        }
    }

    // Devuelve un alumno por su nombre y apellidos.
    buscarAlumno(alumno) {
        if (alumno) {
            return this.alumnosLista.find((a) => a.nombre == alumno.nombre)
        } else {
            console.log(`Nombre no encontrado`);
        }
    }

    // Borra un alumno del sistema.
    eliminarAlumno(nombreA) {
        if (nombreA) {
            this.alumnosLista = this.alumnosLista.filter((alumno) => alumno.nombre !== nombreA);
        } else {
            console.log(`Nombre no encontrado`);
        }
    }

    /*
    // usando findIndex() y splice()
    eliminarAlumno(nombreA) {
        const index = this.alumnosLista.findIndex(alumno => alumno.nombre === nombreA);
        if (index !== -1) {
            this.alumnosLista.splice(index, 1);
        } else {
            console.log(`Nombre no encontrado`);
        }
    }
    */

    // Devuelve los alumnos ordenados por el nombreCompleto.
    listarAlumnos() {
        return this.alumnosLista.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    /*
    //  usando sort() directamente (sin slice)
    listarAlumnos() {
        return [...this.alumnosLista].sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    */

    //  Devuelve los alumnos ordenados por su media
    mostrarAlumnosOrdenados() {
        let alumnosOrdenadosMedia = this.alumnosLista.sort((a, b) => {
            const mediaA = a.calcularMedia();
            const mediaB = b.calcularMedia();
            return mediaB - mediaA; // Orden Descendiente de Nota mas alta a mas Baja
        });
        return alumnosOrdenadosMedia;
    }

    /*
    // mostrarAlumnosOrdenados() usando map() para extraer datos antes de ordenar
    mostrarAlumnosOrdenados() {
        return this.alumnosLista
            .map(alumno => ({ ...alumno, media: alumno.calcularMedia() }))
            .sort((a, b) => b.media - a.media);
    }
    */

}
