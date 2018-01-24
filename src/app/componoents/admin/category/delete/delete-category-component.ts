import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: ''
})
export class AdminDeleteCategoryComponent implements OnInit {
    constructor(
        private service: CategoryService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];

            this.service.deleteCategory(id)
                .subscribe(data => {
                    this.router.navigate(['/admin/categories']);
                });
        })
    }
}