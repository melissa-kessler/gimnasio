import Clase from '../src/clases/Clase';
import Entrenador from '../src/clases/Entrenador';
import Gimnasio from '../src/clases/Gimnasio';
import Socio from '../src/clases/Socio';
import Socio_Reg from '../src/clases/Socio_Reg';
import Socio_VIP from '../src/clases/Socio_VIP';



describe('Calcula los ingresos totales del gimnasio.', () => {
    let gimnasio: Gimnasio;

    beforeEach(() => {
    gimnasio = new Gimnasio();
    });

    test('Con un socio regular inscripto en 1 clase y un socio VIP.', () => {
        const entrenador: Entrenador = new Entrenador(1);
        const socio: Socio = new Socio_Reg(1, 1000);
        const sociovip: Socio = new Socio_VIP(1, 3000);
        const clase: Clase = new Clase(entrenador, 20, 500);

        gimnasio.agregarSocio(socio);
        gimnasio.agregarSocio(sociovip);
        gimnasio.agregarEntrenador(entrenador);
        gimnasio.agregarClase(clase);

        gimnasio.inscribirSocio(socio, clase); 

        let ingresos: number = gimnasio.calcularIngresos();

        expect(ingresos).toBe(4500);
    });
});