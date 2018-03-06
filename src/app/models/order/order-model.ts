export class OrderAdminTableModel {
    public customer: string;
    public address: string;
    public phone: string;
    public total: number;
    public orderNumber: number;

    constructor(
        customer: string,
        address: string,
        phone: string,
        total: number,
        orderNumber: number
    ) {
        this.customer = customer;
        this.address = address;
        this.phone = phone;
        this.total = total;
        this.orderNumber = orderNumber;
    }
}