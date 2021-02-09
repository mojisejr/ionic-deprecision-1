export class googleDriveImage {
  private _url: string;
  private _imageId: string;

  constructor(url: string) {
    this._url = url;
  }

  public static build(url) {
    return new googleDriveImage(url);
  }

  get url() {
    return this._url;
  }
  get imageId() {
    return this._imageId;
  }
  set url(url: string) {
    this._url = url;
  }

  private getImageIdFromSharedUrl(url: string): string {
    const backSlashSplitedUrl = this._url.split("/");
    const imageId = backSlashSplitedUrl[5];
    return imageId;
  }

  toDisplay(): string {
    if (this._url === null) {
      return;
    }
    const mainUrl = "https://drive.google.com/uc?export=view&id=";
    this._imageId = this.getImageIdFromSharedUrl(this._url);
    const mergedUrl = mainUrl + this._imageId;
    return mergedUrl;
  }
}
