
/*
    ===== Código de TypeScript =====
*/
// Arreglos
let habilidades: string[] =['Bash','Counter','Healing','Masucamba'];
//Objetos
////////////InterFace////////////
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; //opcional
}
//Objeto Propiedades obligatorias cargadas por la interface Personaje 
const personaje:Personaje  = {
        nombre: 'MegamanDX',
        hp: 100,
        habilidades
}
//Añadir una propiedad mas 
personaje.puebloNatal = 'Ciudad Verde';

console.table( personaje);