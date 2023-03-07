import {Persona} from './Persona';
import {Telefono} from './Telefono';
import {Mail} from './Mail';
import { Direccion } from './Direccion';

let direccion1:Direccion= new Direccion("San Rufino",14,2,"B",28017, "Madrid","Madrid"); // crear dirección para persona1
let direccion2:Direccion = new Direccion("Fernandez Gallego",45,8,"D",28080, "Madrid","Madrid"); // crear dirección para persona2
let direccion3_1:Direccion = new Direccion ("Fernanado Poo",5,4,"A",28014,"Madrid","Madrid"); // crear dirección para persona3
let direccion3_2:Direccion = new Direccion ("Lago Costanza",22,14,"C",28034,"Madrid","Madrid"); // crear dirección para persona3

let array1:Direccion[] =[direccion1]; // array de direcciones para la persona1
let array2:Direccion[] = [direccion2]; // array de direcciones para la persona2
let array3:Direccion [] = [direccion3_1,direccion3_2]; // array de direcciones para la persona3

let mail1_1:Mail = new Mail ("estudiante","pedro@correo.es"); //crear email para persona1
let mail1_2:Mail = new Mail ("personal", "pedro.lopez@gmail.com"); //crear email para persona1
let arraymail1:Mail[]=[mail1_1,mail1_2]; // array de emails para la persona1

let mail2_1:Mail = new Mail ("corporativo","alba.ruiz@trabajo.es" ); //crear email para persona2
let mail2_2:Mail = new Mail("personal", "albar@hotmail.com"); //crear email para persona2
let arraymail2:Mail[] = [mail2_1,mail2_2]; // array de emails para la persona2

let mail3:Mail = new Mail("personal", "juana123@yahoo.es") //crear email para persona3
let arraymail3:Mail[]= [mail3]; //crear email para persona3

let telefono1:Telefono = new Telefono("movil",666000888); // crear telefóno para la persona1
let arraytelef:Telefono[] = [telefono1]; // array de telefonos para la persona1

let telefono2_1:Telefono = new Telefono ("fijo",914532145); // crear telefóno para la persona2
let telefono2_2:Telefono = new Telefono ("movil",698124537); // crear telefóno para la persona2
let arraytelef2:Telefono[] = [telefono2_1,telefono2_2]; // array de telefonos para la persona2

let telefono3:Telefono = new Telefono("fijo",913423367); // crear telefóno para la persona3
let arraytelef3:Telefono[] = [telefono3]; // array de telefonos para la persona3

//crear personas
let persona1: Persona= new Persona("Pedro", "Lopez Casero", 23, "98765431E","14 de Febrero", "azul", "Masculino",array1,arraymail1,arraytelef,"sin comentarios");
let persona2: Persona=new Persona("Alba", "Ruiz Gomez", 46, "76541096S","24 de Junio", "rojo", "Femenino",array2,arraymail2,arraytelef2,"con alergias");
let persona3: Persona= new Persona("Juana", "Diaz Sanz", 32, "87129864R","5 de Noviembre", "celeste", "Femenino",array3,arraymail3,arraytelef3,"");

//mostrar los datos de las personas por pantalla
console.log("datos persona1:",persona1);
console.log("datos persona2:",persona2);
console.log("datos persona3:",persona3);


let dni:string= "98765431E" //variable para buscar por DNI, su valor se puede cambiar en función que se quiera buscar

if(persona1.dni==dni){ //DNI coincide con la persona1
    console.log("dni pertenece a persona 1")
    persona1.AnadirDireccion("Guillen de Castro",14,3,"C",28078,"Madrid","Madrid"); //añadir nueva Direccion
    persona1.AnadirMail("corporativo","email@outlook.es"); //añadir nuevo email
    persona1.AnadirTelefono("movil",6788903123); // añadir nuevo telefono
    //mostrar por pantalla los 3 registros añadidos
    console.log("la direccion nueva es:",persona1.MostrarDireccion());
    console.log("el email nuevo es:",persona1.MostrarMail());
    console.log("el telefono nuevo es:",persona1.MostrarTelefono());
}
else if (persona2.dni==dni){ //DNI coincide con la persona2
    console.log("dni pertenece a persona 2")
    persona2.AnadirDireccion("Utrillas",23,5,"A",28058,"Madrid","Madrid"); //añadir nueva Direccion
    persona2.AnadirMail("personal","personalmail@hotmail.com"); //añadir nuevo email
    persona2.AnadirTelefono("movil",689903123); // añadir nuevo telefono
    //mostrar por pantalla los 3 registros añadidos
    console.log("la direccion nueva es:",persona2.MostrarDireccion());
    console.log("el email nuevo es:",persona2.MostrarMail());
    console.log("el telefono nuevo es:",persona2.MostrarTelefono());  
}
else if (persona3.dni==dni){//DNI coincide con la persona3
    console.log("dni pertenece a persona 3")
    persona3.AnadirDireccion("San Bernando",66,8,"B",28050,"Madrid","Madrid"); //añadir nueva Direccion
    persona3.AnadirMail("estudiante","personalmail@upm.es"); //añadir nuevo email
    persona3.AnadirTelefono("fijo",917651278); // añadir nuevo telefono
    //mostrar por pantalla los 3 registros añadidos
    console.log("la direccion nueva es:",persona3.MostrarDireccion());
    console.log("el email nuevo es:",persona3.MostrarMail());
    console.log("el telefono nuevo es:",persona3.MostrarTelefono());
}
else{
    console.log("No existen personas con el DNI",dni) //se muestra en el caso de que el DNI no se haya encontrado.
}


