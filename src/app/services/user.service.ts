import { Injectable } from '@angular/core';
import { Vet } from '../interfaces/vet';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  vet: Vet[] = [
    {
      adress: 'city, pinto 111',
      certification: 'vetify certification',
      logo: 'LOGO',
      phone: '23249802',
      name: 'tanoVet',
      business: true,
      profesional_id: '1234',
      solcial: 'fb.com/tenoVet',
      working_hour: '10-20'
    },
    {
      adress: 'city, pinto 111',
      certification: 'vetify certification',
      logo: 'LOGO',
      phone: '23249802',
      name: 'tanoVet',
      business: true,
      profesional_id: '1234',
      solcial: 'fb.com/tenoVet',
      working_hour: '10-20'
    },
    {
      adress: 'pinto 111',
      certification: 'vetify certification',
      logo: 'LOGO',
      phone: '23249802',
      name: 'tanoVet',
      business: true,
      profesional_id: '1234',
      solcial: 'fb.com/tenoVet',
      working_hour: '10-20'
    }
  ];

  user: User[] = []

  constructor() { }
}
