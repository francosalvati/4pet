import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { PetComponent } from '../components/forms/pet/pet.component';
import { VetComponent } from '../components/forms/vet/vet.component';
import { UserComponent } from '../components/forms/user/user.component';
import { DatepickerComponent } from '../components/forms/datepicker/datepicker.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ShiftComponent } from '../components/shift/shift.component';
import { PresentationComponent } from '../components/presentation/presentation.component';
import { FooterComponent } from '../components/footer/footer.component';
import { VetListComponent } from '../components/vet-list/vet-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
      HomePage,
      NavbarComponent,
      PetComponent,
      VetComponent,
      UserComponent,
      MenuComponent,
      DatepickerComponent,
      ShiftComponent,
      PresentationComponent,
      FooterComponent,
      VetListComponent
    ]
})
export class HomePageModule { }
