// Clase Alumno
const ponderacionesDAM = [0.3, 0.2, 0.3, 0.2];
const ponderacionesDAWe = [0.2, 0.4, 0.2, 0.2];

export class Alumno {
    constructor(nombre, apellidos, fechaNacimiento, email, ciclo, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.email = email;
        this.ciclo = ciclo;
        this.notas = notas;
    }

    // Metodos
    toString() {
        console.log("To String")
        return this.nombre;
    }

    valueOf() {
        console.log("Value Of")
        return this.notas.length;
    }


    // calcularMedia con reduce()
    calcularMedia() {
        const ponderaciones = this.ciclo === "DAM" ? ponderacionesDAM : ponderacionesDAWe;
        return this.notas.reduce((suma, nota, i) => suma + nota * ponderaciones[i], 0).toFixed(2);
    }

    /*
    // 🚀 Versión Original
    calcularMedia() {
        const ponderaciones = this.ciclo === "DAM" ? ponderacionesDAM : ponderacionesDAWe;
        let suma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            suma += this.notas[i] * ponderaciones[i];
        }
        return (suma / this.notas.length).toFixed(2);
    }
    */
}
