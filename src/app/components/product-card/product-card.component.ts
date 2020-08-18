import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  _iconName: string = '';
  _title: string = '';
  _text: string = '';

  @Input()
  set iconName(iconName: string) {
    this._iconName = iconName;
  }

  @Input()
  set text(text: string) {
    this._text = text;
  }

  @Input()
  set title(title: string) {
    this._title = title;
  }

  constructor() { }

  ngOnInit() {}

}
