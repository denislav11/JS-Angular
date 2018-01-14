export class CreateProductModel {
    public title: string;
    public price: number;
    public description: string;
    public category: string;
    public model: string;
    public imageUrl: string;

    constructor(
        title: string,
        price: number,
        description: string,
        category: string,
        model: string,
        imageUrl: string
    ) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.model = model;
        this.imageUrl = imageUrl;
    }
}