"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Socio_1 = __importDefault(require("./Socio"));
class Socio_Reg extends Socio_1.default {
    constructor(id, cuota) {
        super(id, cuota);
        this.clases = [];
    }
    calcularTotal() {
        let total = this.cuota;
        this.clases.forEach(clase => {
            total += clase.getCosto();
        });
        return total;
    }
}
exports.default = Socio_Reg;
//# sourceMappingURL=Socio_Reg.js.map