export class OrderCreateModel {
    public name: string;
    public address: string;
    public phone: string;
    public email: string;
    public total: number;
    public comment: string;
    public products: string[]

    constructor(
        name: string,
        address: string,
        phone: string,
        email: string,
        total: number,
        comment: string,
        products: string[]
    ) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.total = total;
        this.comment = comment;
        this.products = products;
    }
}