export class AdminCreateProductModel {
    public title: string;
    public price: number;
    public description: string;
    public categoryId: string;
    public model: string;
    public imageUrl: string;

    constructor(
        title: string,
        price: number,
        description: string,
        categoryId: string,
        model: string,
        imageUrl: string
    ) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.categoryId = categoryId;
        this.model = model;
        this.imageUrl = imageUrl;
    }
}