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


describe('Agrega una clase a la lista de clases.', () => {
    let gimnasio: Gimnasio;
    let clase: Clase;

    beforeEach(() => {
        gimnasio = new Gimnasio();
    });

    test('Agrega una clase.', () => {
        clase = new Clase(20, 500);

        gimnasio.agregarClase(clase);

        expect(gimnasio.getClases()[0]).toBe(clase);
    })
});


describe('Se fija si una clase esta completa o no.', () => {
    let gimnasio: Gimnasio;
    let clase: Clase;
    let completa: boolean;

    beforeEach(() => {
        gimnasio = new Gimnasio();
    });
    
    test('Devuelve true si la clase esta completa.', () => {
        clase = new Clase(2, 500);
        let socio1 = new Socio_Reg(1, 1000);
        let socio2 = new Socio_Reg(2, 1000);

        clase.setInscriptos([socio1, socio2]);

        completa = gimnasio.claseCompleta(clase);

        expect(completa).toBe(true);
    });

    test('Devuelve false si la clase no esta completa.', () => {
        let socio1 = new Socio_Reg(1, 1000);

        clase.setInscriptos([socio1]);

        completa = gimnasio.claseCompleta(clase);

        expect(completa).toBe(false);
    });
})


describe('Inscribe un socio a una clase.', () => {
    let gimnasio: Gimnasio;
    let socio: Socio;
    let clase: Clase;

    beforeEach(() => {
        gimnasio = new Gimnasio();
    });

    test('Agrega un socio regular a una clase.', () => {
        clase = new Clase(20, 500);
        socio = new Socio_Reg(1, 1000);

        gimnasio.agregarSocio(socio);
        gimnasio.agregarClase(clase);

        gimnasio.inscribirSocio(socio, clase);

        gimnasio.inscribirSocio(socio, clase);

        expect(gimnasio.getClases()[0].getInscriptos()[0]).toBe(socio);
    });
});


describe('Asigna un entrenador a un socio.', () => {
    let gimnasio: Gimnasio;
    let entrenador: Entrenador;
    let socio: Socio;

    beforeEach(() => {
        gimnasio = new Gimnasio();
    });

    test('A un socio regular.', () => {
        socio = new Socio_Reg(1, 1000);
        entrenador = new Entrenador(1);

        gimnasio.agregarEntrenador(entrenador);

        gimnasio.asignarEntrenador(entrenador, socio);

        expect(socio.getEntrenador?.()).toBe(entrenador);
    })
})


describe('Calcula los ingresos totales del gimnasio.', () => {
    let gimnasio: Gimnasio;
    let socio: Socio;
    let sociovip: Socio;
    let clase: Clase;

    beforeAll(() => {
        gimnasio = new Gimnasio();
    });

    test('Con un socio regular inscripto en 1 clase y un socio VIP.', () => {
        socio = new Socio_Reg(1, 1000);
        sociovip = new Socio_VIP(1, 3000);
        clase = new Clase(20, 500);
        
        gimnasio.agregarSocio(socio);
        gimnasio.agregarSocio(sociovip);
        gimnasio.agregarClase(clase);

        gimnasio.inscribirSocio(socio, clase); 

        let ingresos: number = gimnasio.calcularIngresos();

        expect(ingresos).toBe(4500);
    });
});