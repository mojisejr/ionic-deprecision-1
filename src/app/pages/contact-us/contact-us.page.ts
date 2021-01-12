import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuBar } from 'src/app/components/menubar/menubar.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  menubar: MenuBar = {
    side: "start",
    contentId: "main",
    menuId: "mainMenu",
  }

  constructor(
    private menuCtrl: MenuController,
  ) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuCtrl.open(this.menubar.menuId);
  }

}
