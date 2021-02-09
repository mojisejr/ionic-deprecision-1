import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Product } from "src/app/models/productModel";
import { ProductService } from "src/app/services/product.service";
import { sizeTranformation } from "./../../utils/helper";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.component.html",
  styleUrls: ["./item-detail.component.scss"],
})
export class ItemDetailComponent implements OnInit {
  @Input() product: Product;
  // $product: Observable<Product>;
  constructor(
    private modalCtrl: ModalController,
    private productService: ProductService
  ) {}

  ngOnInit() {}

  onDismiss() {
    this.modalCtrl.dismiss();
  }

  sizeTransform(size: String[]) {
    sizeTranformation(size);
  }

  onDelete() {
    this.modalCtrl.dismiss(
      {
        id: this.product._id,
      },
      "deleted"
    );
  }
  onMarkAsRecommended() {
    this.productService.markProductAsRecommended(this.product._id);
  }
}
