export class CategoryModel {
    public title: string;
    public _id: string;
    public products: string[]

    constructor(title: string, _id: string, products: string[]) {
        this.title = title;
        this._id = _id;
        this.products = products;
    }
}