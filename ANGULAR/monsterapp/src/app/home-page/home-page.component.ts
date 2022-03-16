import { Component, OnInit } from '@angular/core';
import { MonsterDataServiceService } from '../monster-data-service.service';
import { Monster, Raza } from '../monster.model';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  title = 'Mounstros';
  myMonster:Monster;
  numero:number;
  misMonstruos: Monster[] = [];
  nombreMonstruo:string;
  vidaMonstruo:number;
  ataqueMonstruo:number;
  msg:string = "";
  razaMonstruo:Raza;

  constructor(private monsterData:MonsterDataServiceService){
    this.misMonstruos = this.monsterData.getMonstruos();
  }


  addMonster1(){
    if(this.vidaMonstruo <= 1000 && this.ataqueMonstruo <= 100){
      this.monsterData.saludar()
      let monster:Monster = new Monster(this.nombreMonstruo, this.vidaMonstruo, this.ataqueMonstruo, this.razaMonstruo);
      this.monsterData.addMonster(monster);
      this.msg = "";
    }else{
      this.msg = "Se debe meter una vida menor que 1000 y un ataque menor que 100";
    }
  }

  addMonster2(nombre:string, vida:any, ataque:any,raza:Raza){
    let monster:Monster = new Monster(nombre, vida, ataque, raza);
    this.misMonstruos.push(monster);
  }

  ngOnInit(): void {
  }

}
