"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = __importDefault(require("./Persona"));
class Entrenador extends Persona_1.default {
    especialidad;
    constructor(id) {
        super(id);
        this.especialidad = "";
    }
    asignarPlan(plan, socio) {
        socio.setPlan(plan);
    }
}
exports.default = Entrenador;
//# sourceMappingURL=Entrenador.js.map