export class ProductModel {
    public _id: string;
    public title: string;
    public price: number;
    public description: string;
    public category: string;
    public model: string;
    public image: string;

    constructor(
        _id: string,
        title: string,
        price: number,
        description: string,
        category: string,
        model: string,
        image: string
    ) {
        this._id = _id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.model = model;
        this.image = image;
    }
}