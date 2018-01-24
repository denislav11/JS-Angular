import { AdminGuard } from "../../guards/admin/admin.guard"; import { AdminComponent } from "./home/admin.component";
import { AdminCategoriesComponent } from "./categories/categories.component";
import { AdminCreateCategoryComponent } from "./category/create/create-category-component";

import { Routes } from "@angular/router";
import { AdminEditCategoryComponent } from "./category/edit/edit-category-component";
import { AdminDeleteCategoryComponent } from "./category/delete/delete-category-component";
import { AdminCreateProductComponent } from "./product/create/product.create.component";
import { AdminProductsComponent } from "./products/products.component";
import { AdminEditProductComponent } from "./product/edit/product.edit.component";
import { AdminDeleteProductComponent } from "./product/delete/product.delete.component";

export const adminRoutes: Routes = [
    { path: "admin", canActivate: [AdminGuard], component: AdminComponent },
    { path: 'admin/categories', canActivate: [AdminGuard], component: AdminCategoriesComponent },
    { path: 'admin/categories/create', canActivate: [AdminGuard], component: AdminCreateCategoryComponent },
    { path: 'admin/categories/edit/:id', canActivate: [AdminGuard], component: AdminEditCategoryComponent },
    { path: 'admin/categories/delete/:id', canActivate: [AdminGuard], component: AdminDeleteCategoryComponent },

    { path: 'admin/products', canActivate: [AdminGuard], component: AdminProductsComponent },
    { path: 'admin/products/create', canActivate: [AdminGuard], component: AdminCreateProductComponent },
    { path: 'admin/products/edit/:id', canActivate: [AdminGuard], component: AdminEditProductComponent },
    { path: 'admin/products/delete/:id', canActivate: [AdminGuard], component: AdminDeleteProductComponent }
]