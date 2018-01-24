import { Component, OnInit } from "@angular/core";
import { CreateProductModel } from "../../../../models/create-product-model";
import { CategoryService } from "../../../../services/category.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../../../../services/product.service";
import { ProductModel } from "../../../../models/product/product-model";
import { CategoryModel } from "../../../../models/category/category.model";
import { ToastsManager } from "ng2-toastr";

@Component({
    templateUrl: './product.edit.component.html'
})
export class AdminEditProductComponent implements OnInit {
    public productModel: ProductModel;
    public categories: CategoryModel[];
    public filesToUpload: Array<File>;

    constructor(
        private categoryService: CategoryService,
        private productsService: ProductService,
        private router: Router,
        private route: ActivatedRoute,
        private toastr: ToastsManager
    ) {
        this.productModel = new ProductModel('', '', 0, '', '', '', '');
        this.filesToUpload = [];
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.productsService.getProductById(id)
                .subscribe(res => {
                    this.productModel = res['data'];
                });
        })
        this.categoryService.getAllCategories()
            .subscribe(data => {
                this.categories = data;
            });
    }

    edit() {
        this.productsService.editProduct(this.productModel)
            .subscribe(data => {
                this.router.navigate(['/admin/products']);
            });
    }

    upload(fileInput) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        this.makeFileRequest("http://localhost:3000/upload",
            [],
            this.filesToUpload).then((res) => {
                this.toastr.success(res['message']);
                this.productModel.image = 'assets/img/' + res['data'][0]['filename'];
                console.log(this.productModel);
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