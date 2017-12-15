import { HttpClientService } from "./http-client.service";
import { AuthService } from "./auth/auth.service";
import { AdminCategoryService } from "./admin/admin-category.service";
import { AdminProductService } from "./admin/admin-product.service";
import { ProductService } from "./products/product.service";
import { CategoryService } from "./category/category-service";
import { BasketService } from "./basket/basket.service";
import { OrderService } from "./order/order.service";

export const allServices = [
    HttpClientService,
    AuthService,
    AdminCategoryService,
    AdminProductService,
    ProductService,
    CategoryService,
    BasketService,
    OrderService
];