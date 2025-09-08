"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    nombre;
    id;
    constructor(id) {
        this.id = id;
        this.nombre = "";
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getId() {
        return this.id;
    }
}
exports.default = Persona;
//# sourceMappingURL=Persona.js.map