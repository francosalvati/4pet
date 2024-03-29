import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

//components
import { ApointmentComponent } from '../components/apointment/apointment.component';
import { UserScreenComponent } from '../components/screens/user-screen/user-screen.component';
import { PresentationComponent } from '../components/presentation/presentation.component';
import { VetListComponent } from '../components/vet-list/vet-list.component';
import { PetComponent } from '../components/forms/pet/pet.component';
import { ClinicHistoryComponent } from '../components/clinic-history/clinic-history.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        component: PresentationComponent,
      },
      {
        path: 'formPet',
        component: PetComponent,
      },
      {
        path: 'vet',
        component: VetListComponent,
      },
      {
        path: 'profile',
        component: UserScreenComponent,
      },
      {
        path: 'turnos',
        component: ApointmentComponent,
      },
      {
        path: 'historia/:id',
        component: ClinicHistoryComponent,
      },
      {
        path: '**',
        redirectTo:'',
        pathMatch: 'full',
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
