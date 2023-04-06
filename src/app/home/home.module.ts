import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { VetComponent } from '../components/forms/vet/vet.component';
import { MenuComponent } from '../components/menu/menu.component';
import { PresentationComponent } from '../components/presentation/presentation.component';
import { FooterComponent } from '../components/footer/footer.component';
import { VetListComponent } from '../components/vet-list/vet-list.component';
import { UserScreenComponent } from '../components/screens/user-screen/user-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../components/clinic-history/card/card.component';
import { ClinicHistoryComponent } from '../components/clinic-history/clinic-history.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomePage,
    NavbarComponent,
    VetComponent,
    MenuComponent,
    PresentationComponent,
    FooterComponent,
    VetListComponent,
    UserScreenComponent,
    ClinicHistoryComponent,
    CardComponent
  ]
})
export class HomePageModule { }
