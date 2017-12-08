export class UserLogin {
    private email: string;
    private password: string;
    private username: string;

    constructor(email: string, password: string) {
        this.username = email;
        this.email = email;
        this.password = password;
    }
}