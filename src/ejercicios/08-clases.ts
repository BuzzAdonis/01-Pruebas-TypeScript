/*
    ===== Código de TypeScript =====
*/
class PersonaNormal{
    constructor(
        public nombre?: string,
        public direccion?: string,
    ){}
}

//////Clases
class Heroe extends PersonaNormal{
    // Propiedades en Js
     //alterEgo: string;
     //edad : number;
     //nombreReal : string;  
     ///Es una fucion que se ejecuta cuando se intacioa una clase
     constructor(
        //Propiedades en Ts
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
        ){
            // Llama al construtor de PersonaNormal
            super(nombreReal, 'New York USA');
        }
}
// Instancia la clase Heroe
const ironman = new Heroe('IronMan', 45, 'Tony');

console.log(ironman);