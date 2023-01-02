/*
    ===== Código de TypeScript =====
*/
//Decoradores Ts

function classDecorator<T extends { new (...args: any[]):{}}>(
    constructor:T
){
    return class extends constructor{
        newPrperty = 'new property';
        hello = 'override';
    }
}

@classDecorator
class  MiSuperClase{
    constructor(
        public miPropiedad: string = 'ABC123'
    ){}

    imprimir(){
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase);