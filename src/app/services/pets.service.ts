import { Injectable } from '@angular/core';
import { Pet } from '../interfaces/pet';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  pets: Pet[];
  constructor() {
    this.pets = [
      {
        owner_fk: '1',
        name: 'pepito',
        birthday: new Date(1998, 10, 2),
        species: 'dog',
        race: 'rottweiler',
        gender: 'male',
        castrated: false,
        weight: 30,
        color: 'black',
        has_chip: true,
        photo: 'https://www.zooplus.es/magazine/wp-content/uploads/2017/09/fotolia_80512914.jpg',
        id: '1',
      },
      {
        owner_fk: '2',
        name: 'pepito',
        birthday: new Date(1998, 10, 2),
        species: 'dog',
        race: 'rottweiler',
        gender: 'male',
        castrated: false,
        weight: 30,
        color: 'black',
        has_chip: true,
        photo: 'https://www.zooplus.es/magazine/wp-content/uploads/2017/09/fotolia_80512914.jpg',
        id: '2',
      },
      {
        owner_fk: '3',
        name: 'pepa',
        birthday: new Date(1998, 10, 2),
        species: 'dog',
        race: 'husky',
        gender: 'female',
        castrated: true,
        weight: 25,
        color: 'grey',
        has_chip: true,
        photo: 'https://as01.epimg.net/diarioas/imagenes/2022/05/29/actualidad/1653826510_995351_1653826595_noticia_normal_recorte1.jpg',
        id: '3',
      }
      ,]
  }
}
