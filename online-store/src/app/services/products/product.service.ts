import { Injectable } from "@angular/core";
import { HttpClientService } from "../http-client.service";

@Injectable()
export class ProductService {
    constructor(private http: HttpClientService) { }

}