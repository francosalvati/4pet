import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/interfaces/pet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-clinic-history',
  templateUrl: './clinic-history.component.html',
  styleUrls: ['./clinic-history.component.scss'],
})
export class ClinicHistoryComponent implements OnInit {

  id: string | null;
  pet: Pet | undefined;
  constructor(private route: ActivatedRoute, private petsService: PetsService) {
    this.id = ''
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.pet = this.petsService.pets.find(pet => pet.id === this.id)
  }

}
