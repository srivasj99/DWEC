import { Injectable } from '@angular/core';
import { Monster, Raza } from './monster.model';

@Injectable({
  providedIn: 'root'
})
export class MonsterDataServiceService {

  misMonstruos: Monster[] = [
    new Monster("Eldelbar", 1000, 100, Raza.Elfo),
    new Monster("Golum", 1000, 100, Raza.Orco),
    new Monster("Gimbli", 1000, 100, Raza.Enano),
    new Monster("GKReoOF", 1000, 100, Raza.Trasgo),
  ];

  constructor() {
  }

   saludar(){
    alert("Hola");
  }
  getMonstruos(){
    return this.misMonstruos;
  }

  addMonster(m:Monster){
    this.misMonstruos.push(m);
  }
}
