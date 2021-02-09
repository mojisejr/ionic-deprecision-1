import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePageRoutingModule } from "./home-routing.module";

import { HomePage } from "./home.page";

//components Importing
import { ListItemComponent } from "./../../components/list-item/list-item.component";
import { CreateItemModalComponent } from "./../../components/create-item-modal/create-item-modal.component";
import { ItemDetailComponent } from "./../../components/item-detail/item-detail.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomePage,
    ListItemComponent,
    CreateItemModalComponent,
    ItemDetailComponent,
  ],
})
export class HomePageModule {}
