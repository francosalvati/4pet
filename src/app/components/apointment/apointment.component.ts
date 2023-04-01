import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { Turnos } from 'src/app/interfaces/turnos';
import { TurnosService } from 'src/app/services/turnos.service';
import { OverlayEventDetail } from '@ionic/core/components';



@Component({
  selector: 'app-apointment',
  templateUrl: './apointment.component.html',
  styleUrls: ['./apointment.component.scss'],
})


export class ApointmentComponent implements OnInit {


  @ViewChild(IonModal) modal!: IonModal;


  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;
  //variables

  turnos: Turnos[];
  apointmentName: string = '';
  apointmentDate: string = '';

  userVet = false;


  // constructor

  constructor(
    private turnosService: TurnosService,
    private fb: FormBuilder,
    ) {

    this.turnos = turnosService.turnos;
  }

  ngOnInit() { console.log(this.turnosService.turnos) }


  //date filter

  filterByDate(){
    let filterturnos: Turnos[] = [];

    this.turnosService.turnos.forEach(turno => {
      if(turno.mascota.toLowerCase().includes(this.apointmentDate.toLowerCase())){
        filterturnos.push(turno);
      }
    });
    filterturnos ? this.turnos = filterturnos: this.turnos = this.turnosService.turnos;
  }


  filterByName() {
    let filterturnos: Turnos[] = [];

    this.turnosService.turnos.forEach(turno => {
      if(turno.mascota.toLowerCase().includes(this.apointmentName.toLowerCase())){
        filterturnos.push(turno);
      }
    });
    filterturnos ? this.turnos = filterturnos: this.turnos = this.turnosService.turnos;
  }

  //user managment






  // modal


  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }






  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
