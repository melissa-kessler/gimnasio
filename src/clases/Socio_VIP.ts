import Socio from "./Socio";

export default class Socio_VIP extends Socio {

    public calcularTotal(): number {
        return this.cuota;
    }
}