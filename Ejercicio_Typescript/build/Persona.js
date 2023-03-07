"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Direccion_1 = require("./Direccion");
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
var Persona = (function () {
    function Persona(nombre, apellidos, edad, dni, cumple, color, sexo, direccion, email, telefono, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumple;
        this._color_favorito = color;
        this._sexo = sexo;
        this._direcciones = direccion;
        this._mails = email;
        this._telefonos = telefono;
        this._notas = notas;
    }
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (dni) {
            this._dni = dni;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.AnadirDireccion = function (calle, numero, piso, letra, codigopostal, poblacion, provincia) {
        var tamano = this._direcciones.length + 1;
        this._direcciones[tamano] = new Direccion_1.Direccion(calle, numero, piso, letra, codigopostal, poblacion, provincia);
    };
    Persona.prototype.AnadirMail = function (tipo, direccion) {
        var tamano = this._mails.length + 1;
        this._mails[tamano] = new Mail_1.Mail(tipo, direccion);
    };
    Persona.prototype.AnadirTelefono = function (tipo, numero) {
        var tamano = this._telefonos.length + 1;
        this._telefonos[tamano] = new Telefono_1.Telefono(tipo, numero);
    };
    Persona.prototype.MostrarDireccion = function () {
        var tamano = this._direcciones.length;
        return this._direcciones[tamano - 1];
    };
    Persona.prototype.MostrarMail = function () {
        var tamano = this._mails.length;
        return this._mails[tamano - 1];
    };
    Persona.prototype.MostrarTelefono = function () {
        var tamano = this._telefonos.length;
        return this._telefonos[tamano - 1];
    };
    return Persona;
}());
exports.Persona = Persona;
//# sourceMappingURL=Persona.js.map