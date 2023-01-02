
/*
    ===== Código de TypeScript =====
*/
//Fuciones  sumar 
function sumar(a: number, b: number): number{
return a + b;
}
const resultado = sumar(10, 30);
//Funcion de Fecha sumar
const sumarFlecha = (a: number, b: number ): number =>{
    return a + b;
}
const resultadoFecha = sumarFlecha(10, 30);
//Funcion Multiplicar 
function multiplicar(numero: number, otroNumero?: number, enBaseA: number = 2): number { // Los parametro obligatorios van primero
    return numero * enBaseA;
}
const resultadoM = multiplicar(10,0, 30);

////////////InterFace////////////
interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp:() => void;
}
//Funcion consumeindo Objeto usado la interface PersonajeLOR
function curar(personaje:PersonajeLOR, curarX: number): void{
    personaje.pv += curarX;
    console.table(personaje);
    
}

const nuevoPersonaje: PersonajeLOR = { 
 nombre:'Megaman',
 pv:50,
 mostrarHp(){
    console.log('Puntos de vida',this.pv);
 }
}
curar(nuevoPersonaje , 50)

nuevoPersonaje.mostrarHp();

console.log(resultado, resultadoFecha, resultadoM, );