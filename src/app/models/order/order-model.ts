export class OrderAdminTableModel {
    public name: string;
    public address: string;
    public phone: string; 
    public total: number; 

    constructor(
        name: string,
        address: string,
        phone: string, 
        total: number, 
    ) {
        this.name = name;
        this.address = address;
        this.phone = phone; 
        this.total = total; 
    }
}