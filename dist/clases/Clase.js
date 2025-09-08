"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clase {
    nombre;
    horario;
    entrenador;
    capMax;
    inscriptos;
    costo;
    getCosto() {
        return this.costo;
    }
    setCosto(costo) {
        this.costo = costo;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getHorario() {
        return this.horario;
    }
    setHorario(horario) {
        this.horario = horario;
    }
    getEntrenador() {
        return this.entrenador;
    }
    setEntrenador(entrenador) {
        this.entrenador = entrenador;
    }
    getCapMax() {
        return this.capMax;
    }
    setCapMax(capMax) {
        this.capMax = capMax;
    }
    getInscriptos() {
        return this.inscriptos;
    }
    setInscriptos(inscriptos) {
        this.inscriptos = inscriptos;
    }
    constructor(ent, cap, cos) {
        this.nombre = "";
        this.horario = 0;
        this.entrenador = ent;
        this.capMax = cap;
        this.inscriptos = [];
        this.costo = cos;
    }
}
exports.default = Clase;
//# sourceMappingURL=Clase.js.map