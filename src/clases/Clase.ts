import Entrenador from "./Entrenador";
import Socio from "./Socio";

export default class Clase {
    private nombre: string;
    private horario: number;
    private entrenador?: Entrenador;
    private capMax: number;
    private inscriptos: Array<Socio>;
    private costo: number;

    public getCosto(): number {
        return this.costo;
    }

    public setCosto(costo: number): void {
        this.costo = costo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getHorario(): number {
        return this.horario;
    }

    public setHorario(horario: number): void {
        this.horario = horario;
    }

    public getEntrenador(): Entrenador | undefined {
        return this.entrenador;
    }

    public setEntrenador(entrenador: Entrenador): void {
        this.entrenador = entrenador;
    }

    public getCapMax(): number {
        return this.capMax;
    }

    public setCapMax(capMax: number): void {
        this.capMax = capMax;
    }

    public getInscriptos(): Array<Socio> {
        return this.inscriptos;
    }

    public setInscriptos(inscriptos: Array<Socio>): void {
        this.inscriptos = inscriptos;
    }


    constructor(capacidadMax: number, costo: number) {
        this.nombre = "";
        this.horario = 0;
        this.entrenador = undefined;
        this.capMax = capacidadMax;
        this.inscriptos = [];
        this.costo = costo;
    }
}