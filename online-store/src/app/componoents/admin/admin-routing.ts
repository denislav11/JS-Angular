import { AdminGuard } from "../../guards/admin/admin-guard"; import { AdminComponent } from "./home/admin.component";
import { AdminCategoriesComponent } from "./categories/categories.component";
import { AdminCreateCategoryComponent } from "./category/create/create-category-component";

import { Routes } from "@angular/router";

export const adminRoutes: Routes = [
    { path: "admin", canActivate: [AdminGuard], component: AdminComponent },
    { path: 'categories', component: AdminCategoriesComponent },
    { path: 'categories/create', component: AdminCreateCategoryComponent },
]