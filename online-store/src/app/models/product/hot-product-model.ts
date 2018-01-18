export class HotProductModel {
    public _id: string;
    public title: string;
    public price: number;
    public image: string;

    constructor(
        _id: string,
        title: string,
        price: number,
        image: string
    ) {
        this._id = _id;
        this.title = title;
        this.price = price;
        this.image = image;
    }
}