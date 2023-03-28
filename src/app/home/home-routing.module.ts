import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

//components
import { ShiftComponent } from '../components/shift/shift.component';
import { UserScreenComponent } from '../components/screens/user-screen/user-screen.component';
import { PresentationComponent } from '../components/presentation/presentation.component';
import { VetListComponent } from '../components/vet-list/vet-list.component';

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
        path: 'vet',
        component: VetListComponent,
      },
      {
        path: 'profile',
        component: UserScreenComponent,
      },
      {
        path: 'turnos',
        component: ShiftComponent,
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
