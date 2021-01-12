import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { MenubarComponent } from 'src/app/components/menubar/menubar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ProductCardComponent, MenubarComponent]
})
export class HomePageModule {}
