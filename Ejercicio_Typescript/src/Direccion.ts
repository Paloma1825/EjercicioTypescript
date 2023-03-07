export class Direccion{
    
    _calle:string;
    _numero:number;
    _piso:number;
    _letra:string;
    _codigo_postal:number;
    _poblacion:string;
    _provincia:string;

   constructor(a:string, b:number, c:number, d:string, e:number, f:string, g:string){
        this._calle=a;
        this._numero=b;
        this._piso=c;
        this._letra=d;
        this._codigo_postal=e;
        this._poblacion=f;
        this._provincia=g;
    }


}