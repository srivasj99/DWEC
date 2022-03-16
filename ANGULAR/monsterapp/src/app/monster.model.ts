export enum Raza{
  Orco = "Orco",
  Enano = "Enano",
  Trasgo = "Trasgo",
  Elfo = "Elfo"
}


export class Monster
{
  nombre:string = "";
  vida:number = 0;
  raza:Raza;
  ataque:number = 0;


  constructor(nom: string, vida: number, ataque:number,raza: Raza){
    this.nombre = nom;
    this.vida = vida;
    this.ataque = ataque;
    this.raza = raza;
  }

  atacar(): void{
    //A RELLENAR
  }

}
