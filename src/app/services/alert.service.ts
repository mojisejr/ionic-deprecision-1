import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor(private toastCtrl: ToastController) {}
  public async BasicToastShow(message: string, duraion: number) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duraion,
    });

    return await toast.present();
  }
}
