"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Socio_1 = __importDefault(require("./Socio"));
class Socio_VIP extends Socio_1.default {
    calcularTotal() {
        return this.cuota;
    }
}
exports.default = Socio_VIP;
//# sourceMappingURL=Socio_VIP.js.map