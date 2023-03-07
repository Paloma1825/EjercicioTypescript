"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
var Direccion_1 = require("./Direccion");
var direccion1 = new Direccion_1.Direccion("San Rufino", 14, 2, "B", 28017, "Madrid", "Madrid");
var direccion2 = new Direccion_1.Direccion("Fernandez Gallego", 45, 8, "D", 28080, "Madrid", "Madrid");
var direccion3_1 = new Direccion_1.Direccion("Fernanado Poo", 5, 4, "A", 28014, "Madrid", "Madrid");
var direccion3_2 = new Direccion_1.Direccion("Lago Costanza", 22, 14, "C", 28034, "Madrid", "Madrid");
var array1 = [direccion1];
var array2 = [direccion2];
var array3 = [direccion3_1, direccion3_2];
var mail1_1 = new Mail_1.Mail("estudiante", "pedro@correo.es");
var mail1_2 = new Mail_1.Mail("personal", "pedro.lopez@gmail.com");
var arraymail1 = [mail1_1, mail1_2];
var mail2_1 = new Mail_1.Mail("corporativo", "alba.ruiz@trabajo.es");
var mail2_2 = new Mail_1.Mail("personal", "albar@hotmail.com");
var arraymail2 = [mail2_1, mail2_2];
var mail3 = new Mail_1.Mail("personal", "juana123@yahoo.es");
var arraymail3 = [mail3];
var telefono1 = new Telefono_1.Telefono("movil", 666000888);
var arraytelef = [telefono1];
var telefono2_1 = new Telefono_1.Telefono("fijo", 914532145);
var telefono2_2 = new Telefono_1.Telefono("movil", 698124537);
var arraytelef2 = [telefono2_1, telefono2_2];
var telefono3 = new Telefono_1.Telefono("fijo", 913423367);
var arraytelef3 = [telefono3];
var persona1 = new Persona_1.Persona("Pedro", "Lopez Casero", 23, "98765431E", "14 de Febrero", "azul", "Masculino", array1, arraymail1, arraytelef, "sin comentarios");
var persona2 = new Persona_1.Persona("Alba", "Ruiz Gomez", 46, "76541096S", "24 de Junio", "rojo", "Femenino", array2, arraymail2, arraytelef2, "con alergias");
var persona3 = new Persona_1.Persona("Juana", "Diaz Sanz", 32, "87129864R", "5 de Noviembre", "celeste", "Femenino", array3, arraymail3, arraytelef3, "");
console.log("datos persona1:", persona1);
console.log("datos persona2:", persona2);
console.log("datos persona3:", persona3);
var dni = "98765431E";
if (persona1.dni == dni) {
    console.log("dni pertenece a persona 1");
    persona1.AnadirDireccion("Guillen de Castro", 14, 3, "C", 28078, "Madrid", "Madrid");
    persona1.AnadirMail("corporativo", "email@outlook.es");
    persona1.AnadirTelefono("movil", 6788903123);
    console.log("la direccion nueva es:", persona1.MostrarDireccion());
    console.log("el email nuevo es:", persona1.MostrarMail());
    console.log("el telefono nuevo es:", persona1.MostrarTelefono());
}
else if (persona2.dni == dni) {
    console.log("dni pertenece a persona 2");
    persona2.AnadirDireccion("Utrillas", 23, 5, "A", 28058, "Madrid", "Madrid");
    persona2.AnadirMail("personal", "personalmail@hotmail.com");
    persona2.AnadirTelefono("movil", 689903123);
    console.log("la direccion nueva es:", persona2.MostrarDireccion());
    console.log("el email nuevo es:", persona2.MostrarMail());
    console.log("el telefono nuevo es:", persona2.MostrarTelefono());
}
else if (persona3.dni == dni) {
    console.log("dni pertenece a persona 3");
    persona3.AnadirDireccion("San Bernando", 66, 8, "B", 28050, "Madrid", "Madrid");
    persona3.AnadirMail("estudiante", "personalmail@upm.es");
    persona3.AnadirTelefono("fijo", 917651278);
    console.log("la direccion nueva es:", persona3.MostrarDireccion());
    console.log("el email nuevo es:", persona3.MostrarMail());
    console.log("el telefono nuevo es:", persona3.MostrarTelefono());
}
else {
    console.log("No existen personas con el DNI", dni);
}
//# sourceMappingURL=main.js.map