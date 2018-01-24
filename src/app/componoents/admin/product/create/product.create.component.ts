import { Component, OnInit } from "@angular/core";
import { CreateProductModel } from "../../../../models/create-product-model";
import { CategoryService } from "../../../../services/category.service";
import { ProductService } from "../../../../services/product.service";
import { Router } from "@angular/router";
import { CategoryModel } from "../../../../models/category/category.model";
import { ToastsManager } from "ng2-toastr/src/toast-manager";

@Component({
    templateUrl: './product.create.component.html'
})
export class AdminCreateProductComponent implements OnInit {
    private productModel: CreateProductModel;
    private categories: CategoryModel[];
    private filesToUpload: Array<File>;

    constructor(
        private categoryService: CategoryService,
        private productService: ProductService,
        private router: Router,
        private toastr: ToastsManager
    ) {
        this.productModel = new CreateProductModel('', 0, '', null, '', 'assets/img/nopicture.gif');
        this.filesToUpload = [];
    }

    ngOnInit() {
        this.categoryService.getAllCategories()
            .subscribe(data => {
                this.categories = data;
            });
    }

    create() {
        this.productService.createProduct(this.productModel)
            .subscribe(data => {
                this.router.navigate(['/admin/products']);
            })
    }

    upload(fileInput) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        this.makeFileRequest("http://localhost:3000/upload",
            [],
            this.filesToUpload).then((res) => {
                this.toastr.success(res['message']);
                this.productModel.image = 'assets/img/' + res['data'][0]['filename']
            }, (error) => {
                this.toastr.error(error);
            });
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }
}