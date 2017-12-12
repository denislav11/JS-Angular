import { HttpClientService } from "./auth/http-client.service";
import { AuthService } from "./auth/auth.service";
import { AdminCategoryService } from "./admin/category/admin-category.service";

export const allServices = [
    HttpClientService,
    AuthService,
    AdminCategoryService
];