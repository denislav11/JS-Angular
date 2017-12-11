import { AdminComponent } from "./home/admin.component";
import { AdminGuard } from "../../guards/admin/admin-guard";

export const adminRoutes = [
    { path: "admin", canActivate: [AdminGuard], component: AdminComponent }
]