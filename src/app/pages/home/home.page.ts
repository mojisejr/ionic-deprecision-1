import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuBar } from 'src/app/components/menubar/menubar.component';
import { Product } from 'src/app/models/product.model';
import { googleDriveImage, ProductImage } from 'src/app/models/products-image.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  products: Product[] = [];
  menubar: MenuBar = {
    side: "start",
    contentId: "main",
    menuId: "mainMenu",
  }

  productImages: Array<String> = [
    new googleDriveImage("https://drive.google.com/file/d/1HZjTdZC1d4XxPV0doOwnrVIEkN_AXbPv/view?usp=sharing").toDisplay(),
    new googleDriveImage("https://drive.google.com/file/d/1Ui286xV35WnA42PnZQD56KUVSDEdgJQl/view?usp=sharing").toDisplay(),
    new googleDriveImage("https://drive.google.com/file/d/13ngQXlZR7KYe5kccQAWoAln7lfSwjrCA/view?usp=sharing").toDisplay(),
    new googleDriveImage("https://drive.google.com/file/d/1BDHEo3lZ4tkXopcg5wT0zL4MK2xa_SvB/view?usp=sharing").toDisplay(),
    new googleDriveImage("https://drive.google.com/file/d/1iuvjCkQto_d7oKhZFMeWberSX5fLLrl_/view?usp=sharing").toDisplay(),
    new googleDriveImage("https://drive.google.com/file/d/1pCY3IUy8xJvMy5G0ksIf3Ddqw5hjJ2oS/view?usp=sharing").toDisplay(),
    new googleDriveImage("https://drive.google.com/file/d/1qZ0gJz1Gr-ZsoEuxpK_A9jxFgZ-x88Yf/view?usp=sharing").toDisplay(),
  ]

  constructor(
    private menuCtrl: MenuController,
    private productService: ProductService
  ) { }

  async ngOnInit() {
    const products = await this.productService.loadCollection();
    console.log(products[0].props.brand);
    this.products = [...products];
  }

  openMenu() {
    this.menuCtrl.open(this.menubar.menuId);
  }

}
