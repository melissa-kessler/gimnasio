"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Gimnasio {
    socios;
    entrenadores;
    clases;
    getSocios() {
        return this.socios;
    }
    agregarSocio(socio) {
        this.socios.push(socio);
    }
    getEntrenadores() {
        return this.entrenadores;
    }
    agregarEntrenador(ent) {
        this.entrenadores.push(ent);
    }
    getClases() {
        return this.clases;
    }
    agregarClase(clase) {
        this.clases.push(clase);
    }
    eliminarSocio(socio) {
        let index = this.socios.indexOf(socio);
        this.socios.splice(index, 1);
    }
    eliminarEntrenador(ent) {
        let index = this.entrenadores.indexOf(ent);
        this.entrenadores.splice(index, 1);
    }
    claseCompleta(clase) {
        return clase.getInscriptos().length >= clase.getCapMax();
    }
    inscribirSocio(socio, clase) {
        if (this.clases.includes(clase)) {
            if (!this.claseCompleta(clase)) {
                clase.getInscriptos().push(socio);
                socio.getClases().push(clase);
            }
            else {
                throw new Error("Clase completa.");
            }
        }
        else {
            throw new Error("La clase no existe.");
        }
    }
    asignarEntrenador(ent, soc) {
        if (this.entrenadores.includes(ent)) {
            soc.setEntrenador(ent);
        }
        else {
            throw new Error("El entrenador no esta en el sistema.");
        }
    }
    calcularIngresos() {
        let total = 0;
        this.socios.forEach(socio => {
            total += socio.calcularTotal();
        });
        return total;
    }
    constructor() {
        this.socios = [];
        this.entrenadores = [];
        this.clases = [];
    }
}
exports.default = Gimnasio;
//# sourceMappingURL=Gimnasio.js.map