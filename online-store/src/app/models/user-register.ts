export class UserRegister {
    private name: string;
    private email: string;
    private password: string;
    private address: string;
    public telephone: string;
    private products: string[];

    constructor(
        name: string,
        email: string,
        password: string,
        address: string,
        telephone: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.telephone = telephone;
        this.products = [];
    }
}