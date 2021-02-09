import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Product } from "src/app/models/productModel";
import { ProductService } from "src/app/services/product.service";
import { ItemDetailComponent } from "../item-detail/item-detail.component";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"],
})
export class ListItemComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private modalCtrl: ModalController,
    private productService: ProductService
  ) {}

  ngOnInit() {}

  async onItemClicked() {
    const ItemClickedModal = await this.modalCtrl.create({
      component: ItemDetailComponent,
      componentProps: {
        product: this.product,
      },
      backdropDismiss: false,
    });

    await ItemClickedModal.present();

    const dismissed = await ItemClickedModal.onDidDismiss();
    if (dismissed.role === "deleted") {
      const productId = dismissed.data.id;
      this.productService.deleteProduct(productId);
    }
  }
}
