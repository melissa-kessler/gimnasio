import Clase from "./Clase";
import Socio from "./Socio";

export default class Socio_Reg extends Socio {

    constructor(id: number, cuota: number) {
        super(id, cuota);
        this.clases = [];
    }

    public calcularTotal(): number {
        let total: number = this.cuota;
        this.clases.forEach(clase => {
            total += clase.getCosto();
        })
        return total;
    }
    
    
}