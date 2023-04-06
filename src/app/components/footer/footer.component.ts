import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  accions: string[];
  gadgets: string[];


  constructor() {
    this.accions = [
      'Información',
      'Contacto',
      'Empleo',
      'API',
      'Privacidad',
      'Condiciones',
      'Cuentas destacadas',
      'Ubicaciones',
      'Subir contactos y personas no usuarias'
    ]
    this.gadgets = [
      'lenguajes',
      'company'
    ]
  }

  ngOnInit() { }

}
