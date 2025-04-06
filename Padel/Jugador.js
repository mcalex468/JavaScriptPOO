export class Jugador {
    constructor(nombre, apellidos, edad, email, nivel, partidosJugados, victorias, valoracion) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.email = email;
        this.nivel = nivel;
        this.partidosJugados = partidosJugados;
        this.victorias = victorias;
        this.valoracion = valoracion;
    }

    // Método para devolver una cadena con los datos del jugador
    /*
    toString() {
        console.log("TO STRING:")
        return this.nombre;
    }
    */
    toString() {
        console.log("TO STRING:")
        return `${this.nombre} ${this.apellidos} - Nivel: ${this.nivel}`;
    }

    // Método para agregar una nueva valoración (se mantiene solo 3)
    agregarValoracion(valoracion) {
        if (this.valoracion.length === 3) {
            this.valoracion.shift();
        }
        this.valoracion.push(valoracion);
    }


    // Método para calcular la media ponderada de las valoraciones
    calcularValoracionMedia() {
        let media = 0;
        this.valoracion
        for (let i = 0; i < this.valoracion.length; i++) {
            media += this.valoracion[i]
        }
        return (media / this.valoracion.length).toFixed(2);
    }
}
