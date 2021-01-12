import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

export interface MenuBar {
  side: string;
  contentId: string;
  menuId: string;
}

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {

  menu: MenuBar;

  @Input()
  set config(menubar: MenuBar) {
    this.menu = menubar;
  }
  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
  }

  async onProductCreate() {
    const product = this.productService.buildProduct({
      name: "Emergency Tolley",
      serialNo: "AC-ET001",
      details: "Size: 850 x 520 x 1020 mm",
      brand: "ZHANGJIAGANG",
      category: "Tolley",
    });
    console.log(product.brand);
    this.productService.save(product);
  }
}
