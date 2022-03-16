// @ts-check

let notSure: any = 4;
notSure = "Nueva cadena de texto"; // Ahora pasará a ser un string
notSure = false; // Por último es de un tipo boolean
let lista: any[] = [1, true, "Cadena"];
lista[1] = 100;

enum Profesion {
    panadero = "panadero",
    programador = "programador",
    pintor = "pintor"
}
function construirNombre(nombre: string, apellido?: string): string {
    if (apellido) return nombre + apellido
    else return nombre
}

class Persona {
    public nombre: string;
    public edad: number;
    public profesion: Profesion;
    constructor(nombre: string, edad: number, profesion?: Profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    public saludar(): void {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años. Soy ", this.profesion);
    }
}

let persona = new Persona("Jonatan", 32);
let persona2 = new Persona("Sandra", 25, Profesion.programador);
persona.saludar();
persona2.saludar();

persona2.apellido = "Blazquez Notario";
console.log(persona2.apellido);

let nombre: string = construirNombre(persona.nombre);
console.log(nombre);

comparaEdad(persona, persona2);
function comparaEdad(p1: Persona, p2: Persona): void {
    if (p1.edad > p2.edad) {
        console.log(p1.nombre, " es mayor")
    } else {
        console.log(p2.nombre, " es mayor")
    }
}
