import {Direccion} from './Direccion';
import {Telefono} from './Telefono';
import {Mail} from './Mail';

export class Persona {
    _nombre:string;
    _apellidos:string;
    _edad:number;
    _dni:string;
    _cumpleanos:string;
    _color_favorito:string;
    _sexo:string;
    _direcciones:Direccion[];
    _mails:Mail[];
    _telefonos:Telefono[];
    _notas:string;

    constructor(nombre:string, apellidos:string, edad:number, dni:string, cumple:string, color:string, sexo:string, direccion:Direccion[], email:Mail[], telefono:Telefono[],notas:string) {
        this._nombre=nombre;
        this._apellidos=apellidos;
        this._edad=edad;
        this._dni=dni;
        this._cumpleanos=cumple;
        this._color_favorito=color;
        this._sexo=sexo;
        this._direcciones= direccion;
        this._mails=email;
        this._telefonos=telefono;
        this._notas=notas;
    }
  
    public get dni():string{
        return this._dni;
    }

    public set dni(dni:string){
        this._dni=dni;
    }

    AnadirDireccion(calle:string, numero:number,piso:number,letra:string,codigopostal:number,poblacion:string, provincia:string){
        let tamano = this._direcciones.length+1 //tamaño del array
        this._direcciones[tamano] = new Direccion(calle,numero,piso,letra,codigopostal,poblacion,provincia); // añadir la direccion en la ultima posición del array
    }
    AnadirMail(tipo:string,direccion:string){
        let tamano= this._mails.length+1;//tamaño del array
        this._mails[tamano] = new Mail (tipo,direccion); // añador el mail en la ultima posicion del array
    }
    AnadirTelefono(tipo:string,numero:number){
        let tamano = this._telefonos.length+1;//tamaño del array
        this._telefonos[tamano] = new Telefono(tipo, numero); //añadr el telefono en la ultima posicion del array
    }

    MostrarDireccion(){
        let tamano = this._direcciones.length;
        return this._direcciones[tamano-1]; //mostrar la direccion añadida
    }
    
    MostrarMail(){
        let tamano = this._mails.length;
        return this._mails[tamano-1]; //mostrar el mail añadido
    }
    MostrarTelefono(){
        let tamano = this._telefonos.length;
        return this._telefonos[tamano-1]; //mostrar el telefono añadido
    }

}