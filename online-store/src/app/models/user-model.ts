export class UserModel {
    public name: string;
    public email: string;
    public password: string;
    public address: string;
    public telephone: string;
    public products: string[];
    public _id: string;

    constructor(
        _id: string,
        name: string,
        email: string,
        password: string,
        address: string,
        products: string[],
        telephone: string) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.products = products;
        this.telephone = telephone
    }
}