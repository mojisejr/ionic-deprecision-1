export interface productProps {
  _id?: String;
  brand?: String;
  type: String;
  category: String;
  size: number[];
  details: String;
  configurations: String[];
  recommend?: Boolean;
  imageUrl?: String;
  modelNo: String;
}

export class Product {
  _id?: String;
  brand?: String;
  type: String;
  category: String;
  size: number[];
  details: String;
  configurations: String[];
  recommend?: Boolean;
  imageUrl?: String;
  modelNo: String;

  private constructor(props: productProps) {
    this._id = props._id || null;
    this.brand = props.brand || null;
    this.type = props.type;
    this.category = props.category;
    this.size = props.size;
    this.details = props.details;
    this.configurations = props.configurations;
    this.imageUrl = props.imageUrl || null;
    this.modelNo = props.modelNo;
    this.recommend = props.recommend || false;
  }

  public static buildProduct(props: productProps) {
    if (!props) {
      throw new Error("wrong product property");
    }
    return new Product(props);
  }
}
