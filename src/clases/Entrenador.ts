import Persona from "./Persona";
import Plan from "./Plan";
import Socio from "./Socio";

export default class Entrenador extends Persona {
    private especialidad: string;

    constructor(id: number) {
        super(id)
        this.especialidad = "";
    }

    public asignarPlan(plan: Plan, socio: Socio): void {
        socio.setPlan(plan);
    }
}