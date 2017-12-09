export class UserRegister {
    private name: string;
    private email: string;
    private password: string;
    private address: string;

    constructor(
        name: string,
        email: string,
        password: string,
        address: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
    }
}