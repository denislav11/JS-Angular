import { HttpClientService } from "./http-client.service";
import { AuthService } from "./auth/auth.service";
import { AdminCategoryService } from "./admin/admin-category.service";
import { AdminProductService } from "./admin/admin-product.service";

export const allServices = [
    HttpClientService,
    AuthService,
    AdminCategoryService,
    AdminProductService
];