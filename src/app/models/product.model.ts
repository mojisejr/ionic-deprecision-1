export interface ProductProps {
    name: string,
    brand: string,
    serialNo: string,
    category: string,
    details: string,
    imageUrl?: string,
}

export class Product {
    private _id: string | number;
    props: ProductProps;
    constructor(
        props: ProductProps,
        id?: string | number
    ) {
        this._id = id;
        this.props = props
    }

    get id(): string | number {
        return this._id;
    }

    get name(): string {
        return this.props.name;
    }

    get brand(): string {
        return this.props.brand;
    }

    get serialNo(): string {
        return this.props.serialNo;
    }

    get category(): string {
        return this.props.category;
    }

    get details(): string {
        return this.props.details;
    }

    get imageUrl(): string {
        return this.props.imageUrl;
    }
}