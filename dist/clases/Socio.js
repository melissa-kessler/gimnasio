"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = __importDefault(require("./Persona"));
class Socio extends Persona_1.default {
    plan;
    cuota;
    clases;
    entrenador;
    getEntrenador() {
        return this.entrenador;
    }
    setEntrenador(entrenador) {
        this.entrenador = entrenador;
    }
    getClases() {
        return this.clases;
    }
    getPlan() {
        return this.plan;
    }
    setPlan(plan) {
        this.plan = plan;
    }
    getCuota() {
        return this.cuota;
    }
    setCuota(cuota) {
        this.cuota = cuota;
    }
    constructor(id, cuota) {
        super(id);
        this.plan = undefined;
        this.cuota = cuota;
        this.clases = [];
        this.entrenador = undefined;
    }
}
exports.default = Socio;
//# sourceMappingURL=Socio.js.map