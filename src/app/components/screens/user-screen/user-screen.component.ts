import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interfaces/pet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.scss'],
})
export class UserScreenComponent implements OnInit {
  pets: Pet[];
  constructor( private petsService: PetsService) {
    this.pets = petsService.pets
  }

  ngOnInit() {}

}
