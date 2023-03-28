import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { VetComponent } from '../components/forms/vet/vet.component';
import { MenuComponent } from '../components/menu/menu.component';
import { PresentationComponent } from '../components/presentation/presentation.component';
import { FooterComponent } from '../components/footer/footer.component';
import { VetListComponent } from '../components/vet-list/vet-list.component';
import { UserScreenComponent } from '../components/screens/user-screen/user-screen.component';

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
    VetComponent,
    MenuComponent,
    PresentationComponent,
    FooterComponent,
    VetListComponent,
    UserScreenComponent
  ]
})
export class HomePageModule { }
