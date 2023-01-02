
/*
    ===== Código de TypeScript =====
*/
////////////InterFace////////////
interface SuperHeroe{
    nombre: string;
    edad: number;
    direccion:Direccion;
    mostrarDireccion:() => string;
}
interface Direccion{
    calle: string,
    pais: string,
    ciudad: string
}
const superHeroe: SuperHeroe = {
    nombre: 'SpiderMan',
    edad: 17,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NYA'
    },
    mostrarDireccion(){
        return `${this.nombre}, ${this.direccion.ciudad}, ${this.direccion.pais}`;
    }
}
const direccion = superHeroe.mostrarDireccion();
console.log(direccion);