import Clase from "./Clase";
import Entrenador from "./Entrenador";
import Socio from "./Socio";

export default class Gimnasio {
    private socios: Array<Socio>;
    private entrenadores: Array<Entrenador>;
    private clases: Array<Clase>;

    public getSocios(): Array<Socio> {
        return this.socios;
    }

    public agregarSocio(socio: Socio): void {
        this.socios.push(socio);
    }

    public getEntrenadores(): Array<Entrenador> {
        return this.entrenadores;
    }

    public agregarEntrenador(ent: Entrenador): void {
        this.entrenadores.push(ent);
    }

    public getClases(): Array<Clase> {
        return this.clases;
    }

    public agregarClase(clase: Clase): void {
        this.clases.push(clase);
    }

    public eliminarSocio(socio: Socio) {
        let index: number = this.socios.indexOf(socio);
        this.socios.splice(index, 1);
    }

    public eliminarEntrenador(ent: Entrenador) {
        let index: number = this.entrenadores.indexOf(ent);
        this.entrenadores.splice(index, 1);
    }

    public claseCompleta(clase: Clase): boolean {
        return clase.getInscriptos().length >= clase.getCapMax();
    }
    
    public inscribirSocio(socio: Socio, clase: Clase) {
        if (this.clases.includes(clase)) {
            if (!this.claseCompleta(clase)) {
            clase.getInscriptos().push(socio);
            socio.getClases().push(clase);
            } else {
                throw new Error("Clase completa.");
            }
        } else {
            throw new Error("La clase no existe.");
        }
    }

    public asignarEntrenador(ent: Entrenador, soc: Socio): void {
        if (this.entrenadores.includes(ent)) {
            soc.setEntrenador(ent);
        } else {
            throw new Error("El entrenador no esta en el sistema.");
        }
    }

    public calcularIngresos(): number {
        let total: number = 0;
        this.socios.forEach(socio => {
            total += socio.calcularTotal();
        })
        return total;
    }

    constructor() {
        this.socios = [];
        this.entrenadores = [];
        this.clases = [];
    }
}