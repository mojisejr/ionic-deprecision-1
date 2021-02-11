import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Observable } from "rxjs";
import { CreateItemModalComponent } from "src/app/components/create-item-modal/create-item-modal.component";
import { Product } from "src/app/models/productModel";
import { User } from "src/app/models/userModel";
import { AuthService } from "src/app/services/auth.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  // products: Product[];
  products: Observable<Product[]>;
  loggedInUser: Observable<User>;
  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) {}

  async ngOnInit() {
    this.productService.fetchProducts();
    this.products = this.productService.getProductsListener();
    this.loggedInUser = this.authService.getAuthListener();
  }

  async onCreateNewProduct() {
    const createNewProductModal = await this.modalCtrl.create({
      component: CreateItemModalComponent,
      backdropDismiss: false,
      componentProps: {
        products: this.products,
      },
    });
    await createNewProductModal.present();

    const productCreated = await createNewProductModal.onDidDismiss();
    if (productCreated.role === "created") {
      // console.log(productCreated.data);
      this.productService.createNewProduct(productCreated.data);
      this.productService.saveNewProduct();
    }
  }

  onShowRecommended() {
    this.productService.getRecommended();
  }

  onShotAllProduct() {
    this.productService.fetchProducts();
  }

  async onSignOut() {
    this.authService.signOut().then((_) => {
      this.navCtrl.navigateBack("/login");
    });
  }
}
