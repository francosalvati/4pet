import { Component, OnInit } from '@angular/core';
import { Vet } from 'src/app/interfaces/vet';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.scss'],
})
export class VetListComponent implements OnInit {
  vetList: Vet[];
  constructor(private vetService: UserService) {
    this.vetList = vetService.vet;
  }

  ngOnInit() { }

}
