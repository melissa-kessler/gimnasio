export default abstract class Persona {
    protected nombre: string;
    protected id: number;

    constructor(id: number) {
        this.id = id;
        this.nombre = "";
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getId(): number {
        return this.id;
    }

}