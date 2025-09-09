import Clase from '../src/clases/Clase';
import Entrenador from '../src/clases/Entrenador';
import Gimnasio from '../src/clases/Gimnasio';
import Socio from '../src/clases/Socio';
import Socio_Reg from '../src/clases/Socio_Reg';
import Socio_VIP from '../src/clases/Socio_VIP';


describe('Agrega un socio a la lista de socios.', () => {
    let gimnasio: Gimnasio;
    let socio: Socio;

    beforeEach(() => {
        gimnasio = new Gimnasio();
    });

    test('Agrega un socio regular.', () => {
        socio = new Socio_Reg(1, 1000);
        gimnasio.agregarSocio(socio);
        expect(gimnasio.getSocios()[0]).toBe(socio);
    });

    test('Agrega un socio VIP.', () => {
        socio = new Socio_VIP(1, 3000);
        gimnasio.agregarSocio(socio);
        expect(gimnasio.getSocios()[0]).toBe(socio);
    });
})


describe('Agrega un entrenador a la lista de entrenadores.', () => {
    let gimnasio: Gimnasio;
    let entrenador: Entrenador;

    beforeEach(() => {
        gimnasio = new Gimnasio();
    });

    test('Agrega un entrenador.', () => {
        entrenador = new Entrenador(1);
        gimnasio.agregarEntrenador(entrenador);
        expect(gimnasio.getEntrenadores()[0]).toBe(entrenador);
    })
}); 


describe('Calcula los ingresos totales del gimnasio.', () => {
    let gimnasio: Gimnasio;
    let entrenador: Entrenador;
    let socio: Socio;
    let sociovip: Socio;
    let clase: Clase;

    beforeAll(() => {
        gimnasio = new Gimnasio();
        entrenador = new Entrenador(1);
        socio = new Socio_Reg(1, 1000);
        sociovip = new Socio_VIP(1, 3000);
        clase = new Clase(entrenador, 20, 500);
    });

    test('Con un socio regular inscripto en 1 clase y un socio VIP.', () => {
        gimnasio.agregarSocio(socio);
        gimnasio.agregarSocio(sociovip);
        gimnasio.agregarEntrenador(entrenador);
        gimnasio.agregarClase(clase);

        gimnasio.inscribirSocio(socio, clase); 

        let ingresos: number = gimnasio.calcularIngresos();

        expect(ingresos).toBe(4500);
    });
});