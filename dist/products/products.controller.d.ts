import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/product.dto';
import { Product } from './interfaces/product';
import { UpdateProductDTO } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly prodServ;
    constructor(prodServ: ProductsService);
    addProd(prod: CreateProductDTO): Promise<boolean>;
    getprod(): Promise<Product[]>;
    deletebyid(prod_id: number): Promise<boolean>;
    updateProd(id: number, updatedInfo: UpdateProductDTO): Promise<Product>;
    findbyId(id: number): Promise<Product>;
    findbymail(email: string): Promise<Product[]>;
    updateQTY(id: number, qty: number): Promise<boolean>;
}
