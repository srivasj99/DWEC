import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contacto:string = "Contacto"
  nombre:string = "Samuel"
  apellidos:string = "Rivas Jimenez"
  repositorio:string = "https://github.com/srivasj99/DWEC_Monsterapp";

  constructor() { }

  ngOnInit(): void {
  }

}
