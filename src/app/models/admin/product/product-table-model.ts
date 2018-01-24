export class AdminProductTableModel {
    public _id: string;
    public title: string;
    public price: number;
    public model: string;

    constructor(
        _id: string,
        title: string,
        price: number,
        model: string) {
        this._id = _id;
        this.title = title;
        this.price = price;
        this.model = model;
    }
}