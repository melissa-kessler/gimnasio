"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Clase_1 = __importDefault(require("./clases/Clase"));
const Entrenador_1 = __importDefault(require("./clases/Entrenador"));
const Gimnasio_1 = __importDefault(require("./clases/Gimnasio"));
const Plan_1 = __importDefault(require("./clases/Plan"));
const Socio_Reg_1 = __importDefault(require("./clases/Socio_Reg"));
const Socio_VIP_1 = __importDefault(require("./clases/Socio_VIP"));
const gimnasio = new Gimnasio_1.default();
const entrenador = new Entrenador_1.default(1);
const socio = new Socio_Reg_1.default(1, 1000);
const sociovip = new Socio_VIP_1.default(1, 3000);
const plan = new Plan_1.default();
const clase = new Clase_1.default(entrenador, 0, 500);
gimnasio.agregarSocio(socio);
gimnasio.agregarSocio(sociovip);
gimnasio.agregarEntrenador(entrenador);
gimnasio.agregarClase(clase);
try {
    gimnasio.inscribirSocio(socio, clase);
}
catch (error) {
    console.log(error.message);
    console.log("El socio no pudo ser inscripto a la clase.");
}
try {
    gimnasio.asignarEntrenador(entrenador, socio);
}
catch (error) {
    console.log(error.message);
    console.log("El entrenador no pudo ser asignado al socio.");
}
entrenador.asignarPlan(plan, socio);
console.log("El total a pagar del socio regular es: " + socio.calcularTotal());
console.log("El total a pagar del socio VIP es: " + sociovip.calcularTotal());
console.log("El ingreso total del gimnasio es: " + gimnasio.calcularIngresos());
//# sourceMappingURL=index.js.map