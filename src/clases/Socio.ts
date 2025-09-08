import Clase from "./Clase";
import Entrenador from "./Entrenador";
import Persona from "./Persona";
import Plan from "./Plan";

export default abstract class Socio extends Persona {
    protected plan?: Plan;
    protected cuota: number;
    protected clases: Array<Clase>;
    protected entrenador?: Entrenador;

    public getEntrenador?(): Entrenador | undefined {
        return this.entrenador;
    }

    public setEntrenador(entrenador: Entrenador): void {
        this.entrenador = entrenador;
    }

    public getClases(): Array<Clase> {
        return this.clases;
    }

    public getPlan(): Plan | undefined {
        return this.plan;
    }

    public setPlan(plan: Plan): void {
        this.plan = plan;
    }

    public getCuota(): number {
        return this.cuota;
    }

    public setCuota(cuota: number): void {
        this.cuota = cuota;
    }


    constructor(id: number, cuota: number) {
        super(id);
        this.plan = undefined;
        this.cuota = cuota;
        this.clases = [];
        this.entrenador = undefined;
    }

    public abstract calcularTotal(): number;
}