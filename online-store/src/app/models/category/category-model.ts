export class CategoryModel {
    public title: string;
    public _id: string;

    constructor(title: string, _id: string) {
        this.title = title;
        this._id = _id;
    }
}