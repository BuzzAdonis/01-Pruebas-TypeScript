/*
    ===== Código de TypeScript =====
*/
//Desetructuración de Objetos
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles:Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reprodutor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor:'Es Sheeran',
        anio: 2015
    }
}
const autor = 'Fulano';
const {volumen, segundo, cancion, detalles:{ autor:autorDetalle }, detalles:{ anio }} = reprodutor; //por nombre
//const {anio, autor} = detalles;

console.log( 'El volumen actual de: ' + volumen);
console.log( 'El segundo actual de: ' + segundo);
console.log( 'La canción actual de: ' + cancion);
console.log( 'El autor es: ' + autorDetalle);
console.log( 'El año es: ' + anio);

///Desetructuración de Arrey
const dbz: string[] = ['Goku', 'Vegetta', 'Trunks', 'Krilin', 'Maestro Rachy'];
const [ p1, p2, p3,  p4,  p5] = dbz; //por pocion
console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);
console.log('Personaje 4:', p4);
console.log('Personaje 5:', p5);
