export class HotProductModel {
    public _id: string;
    public title: string;
    public price: number;
    public imageUrl: string;

    constructor(
        _id: string,
        title: string,
        price: number,
        imageUrl: string
    ) {
        this._id = _id;
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}