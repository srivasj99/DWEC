import { Component, Input, OnInit } from '@angular/core';
import { Monster } from '../monster.model';

@Component({
  selector: 'app-monster-c',
  templateUrl: './monster-c.component.html',
  styleUrls: ['./monster-c.component.css']
})
export class MonsterCComponent implements OnInit {


  @Input() monsterEnviado:Monster;

  constructor() { }

  ngOnInit(): void {
  }

}
