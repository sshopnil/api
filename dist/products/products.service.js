"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductsService = class ProductsService {
    constructor(productModel, connection) {
        this.productModel = productModel;
        this.connection = connection;
    }
    async addProduct(product) {
        const newProd = new this.productModel(product);
        await newProd.save();
        return true;
    }
    async getAllProd() {
        return this.productModel.find();
    }
    async delbyid(prod_id) {
        const findProd = await this.productModel.findOne({ prod_id });
        if (findProd) {
            const delProd = await this.productModel.deleteOne({ prod_id });
            return delProd.acknowledged;
        }
        else {
            throw new common_1.NotFoundException('Invalid product id provided!');
        }
    }
    async update(id, updatedProd) {
        const findProd = await this.productModel.findOne({ prod_id: id });
        if (!findProd) {
            throw new common_1.NotFoundException('Product not found!');
        }
        const { name, price, qty, desc, image, rating } = updatedProd;
        const filter = { prod_id: id };
        const updateItem = {
            name: name, price: price, qty: qty, desc: desc, image: image, rating: rating
        };
        const update = await this.productModel.findOneAndUpdate(filter, updatedProd, { new: true });
        return update;
    }
    async getOne(id) {
        return await this.productModel.findOne({ prod_id: id });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('products')),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Connection])
], ProductsService);
//# sourceMappingURL=products.service.js.map