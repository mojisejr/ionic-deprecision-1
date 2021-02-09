import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { createArrayFromSplittedString } from "./../../utils/helper";

@Component({
  selector: "app-create-item-modal",
  templateUrl: "./create-item-modal.component.html",
  styleUrls: ["./create-item-modal.component.scss"],
})
export class CreateItemModalComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      modelNo: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      brand: new FormControl(null),
      size: new FormControl(null),
      details: new FormControl(null),
      configurations: new FormControl(null),
      imageUrl: new FormControl(null),
    });
  }
  async onDismiss() {
    await this.modalCtrl.dismiss();
  }

  onFormSubmit(formGroup: FormGroup) {
    let productData = formGroup.value;
    productData["size"] === null
      ? undefined
      : createArrayFromSplittedString(productData["size"]);
    productData["configurations"] === null
      ? undefined
      : createArrayFromSplittedString(productData["configurations"]);
    if (!formGroup.valid) {
    } else {
      this.modalCtrl.dismiss(productData, "created");
    }
  }
}
