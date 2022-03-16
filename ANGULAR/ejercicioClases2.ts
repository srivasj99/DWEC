// @ts-check
class Perro implements Mamifero {
    private velocidad: number;
    private raza: string;
    private color: string;
    constructor(raza: string, color: string, velocidad: number) {
        this.raza = raza;
        this.color = color;
        this.velocidad = velocidad;
    }
    public ladrar(): void {
        console.log("guau");
    }
    public caminar(distancia: number): number {
        return distancia / this.velocidad;
    }
}

class Persona implements Mamifero {
    private velocidad: number;
    public nombre: string;
    public edad: number;
    constructor(nombre: string, edad: number, velocidad: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.velocidad = velocidad;
    }
    public saludar(): void {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años");
    }
    public caminar(distancia: number): number {
        return distancia / this.velocidad;
    }
}

interface Mamifero {
    velocidad: number;

    caminar(distancia: number): number;
}
let p1 = new Perro("chihuahua", "marron", 20);
let p2 = new Perro("labrador", "beige", 30);
p2.ladrar();
let persona1 = new Persona("Sandra", 25, 10);
console.log("El chihuahua tardaría " + p1.caminar(100) + " minutos");
console.log("Sandra tardaría " + persona1.caminar(100) + " minutos");