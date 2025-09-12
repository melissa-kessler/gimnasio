import Clase from "./clases/Clase";
import Entrenador from "./clases/Entrenador";
import Gimnasio from "./clases/Gimnasio"
import Plan from "./clases/Plan";
import Socio from "./clases/Socio";
import Socio_Reg from "./clases/Socio_Reg";
import Socio_VIP from "./clases/Socio_VIP";

const gimnasio: Gimnasio = new Gimnasio();

const entrenador: Entrenador = new Entrenador(1);

const socio: Socio = new Socio_Reg(1, 1000);

const sociovip: Socio = new Socio_VIP(1, 3000);

const plan: Plan = new Plan();

const clase: Clase = new Clase(20, 500);

gimnasio.agregarSocio(socio);

gimnasio.agregarSocio(sociovip);

gimnasio.agregarEntrenador(entrenador);

gimnasio.agregarClase(clase);

clase.setEntrenador(entrenador);

try {
    gimnasio.inscribirSocio(socio, clase);
} catch (error) {
    console.log(error.message);
    console.log("El socio no pudo ser inscripto a la clase.");
}

try {
    gimnasio.asignarEntrenador(entrenador, socio);
} catch (error) {
    console.log(error.message);
    console.log("El entrenador no pudo ser asignado al socio.");
}

entrenador.asignarPlan(plan, socio);

console.log("El total a pagar del socio regular es: " + socio.calcularTotal());

console.log("El total a pagar del socio VIP es: " + sociovip.calcularTotal());

console.log("El ingreso total del gimnasio es: " + gimnasio.calcularIngresos());