import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Turnos } from 'src/app/interfaces/turnos';
import { TurnosService } from 'src/app/services/turnos.service';



@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss'],
})


export class ShiftComponent implements OnInit {

  turnos: Turnos[];
  shiftName: string = '';
  shiftDate: string = '';
  constructor(private turnosService: TurnosService) {
    this.turnos = turnosService.turnos;
  }

  ngOnInit() { console.log(this.turnosService.turnos) }

  filterByDate(){
    let filterturnos: Turnos[] = [];

    this.turnosService.turnos.forEach(turno => {
      if(turno.mascota.toLowerCase().includes(this.shiftDate.toLowerCase())){
        filterturnos.push(turno);
      }
    });
    filterturnos ? this.turnos = filterturnos: this.turnos = this.turnosService.turnos;
  }


  filterByName() {
    let filterturnos: Turnos[] = [];

    this.turnosService.turnos.forEach(turno => {
      if(turno.mascota.toLowerCase().includes(this.shiftName.toLowerCase())){
        filterturnos.push(turno);
      }
    });
    filterturnos ? this.turnos = filterturnos: this.turnos = this.turnosService.turnos;
  }
}
