import { Component, Input } from '@angular/core';
import { AdminCategory } from '../../../models/admin-category';

@Component({
    templateUrl: './category.component.html',
    selector: 'admin-category'
})
export class AdminCategoryComponent {
    @Input('adminCategoryProp') category: AdminCategory;
}