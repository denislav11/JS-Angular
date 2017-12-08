export class UserRegister {
    public name: string;
    public email: string;
    public password: string;
    public address: string;

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