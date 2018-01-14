import { HttpClientService } from "./http-client.service";
import { AuthService } from "./auth.service";
import { CategoryService } from "./category.service";
import { ProductService } from "./product.service";
import { BasketService } from "./basket/basket.service";
import { OrderService } from "./order/order.service";

export const allServices = [
    HttpClientService,
    AuthService,
    CategoryService, 
    ProductService,
    BasketService,
    OrderService
];