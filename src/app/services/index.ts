import { HttpClientService } from "./http-client.service";
import { AuthService } from "./auth.service";
import { CategoryService } from "./category.service";
import { ProductService } from "./product.service";
import { CartService } from "./cart.service";
import { OrderService } from "./order.service";

export const allServices = [
    HttpClientService,
    AuthService,
    CategoryService,
    ProductService,
    CartService,
    OrderService
];