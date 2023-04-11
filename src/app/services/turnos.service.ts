import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  turnos = [
    {
      fecha: '20/3/2020',
      hora: '14:00',
      consulta: 'revision',
      mascota: 'nombre5Mascota',
      id: '1'
    },
    {
      fecha: '23/3/2020',
      hora: '15:15',
      consulta: 'revision',
      mascota: 'nombre0Mascota',
      id: '2'
    },
    {
      fecha: '21/3/2020',
      hora: '13:30',
      consulta: 'revision',
      mascota: 'nombre1Mascota',
      id: '3'
    },
    {
      fecha: '25/3/2020',
      hora: '16:00',
      consulta: 'revision',
      mascota: 'nombre3Mascota',
      id: '4'
    },
    {
      fecha: '27/3/2020',
      hora: '15:00',
      consulta: 'revision',
      mascota: 'nombre2Mascota',
      id: '5'
    },
    {
      fecha: '27/3/2020',
      hora: '15:00',
      consulta: 'revision',
      mascota: 'nombre2Mascota',
      id: '6'
    },
    {
      fecha: '27/3/2020',
      hora: '15:00',
      consulta: 'revision',
      mascota: 'nombre2Mascota',
      id: '7'
    },
    {
      fecha: '27/3/2020',
      hora: '15:00',
      consulta: 'revision',
      mascota: 'nombre2Mascota',
      id: '8'
    },
    {
      fecha: '27/3/2020',
      hora: '15:00',
      consulta: 'revision',
      mascota: 'nombre2Mascota',
      id: '9'
    }
  ]
  constructor() { }

}
