export class BasketCreateModel {
    public userId: string;
    public productId: string;

    constructor(userId: string, productId: string) {
        this.userId = userId;
        this.productId = productId;
    }
}