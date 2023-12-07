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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const product_dto_1 = require("./dto/product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
let ProductsController = class ProductsController {
    constructor(prodServ) {
        this.prodServ = prodServ;
    }
    async addProd(prod) {
        return this.prodServ.addProduct(prod);
    }
    async getprod() {
        return this.prodServ.getAllProd();
    }
    async deletebyid(prod_id) {
        return this.prodServ.delbyid(prod_id);
    }
    async updateProd(id, updatedInfo) {
        return this.prodServ.update(id, updatedInfo);
    }
    async findbyId(id) {
        return this.prodServ.getOne(id);
    }
    async findbymail(email) {
        return this.prodServ.findbymail(email);
    }
    async updateQTY(id, qty) {
        return this.prodServ.updateOrder(id, qty);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.CreateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "addProd", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getprod", null);
__decorate([
    (0, common_1.Delete)('prod_id'),
    __param(0, (0, common_1.Param)('prod_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deletebyid", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_product_dto_1.UpdateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateProd", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findbyId", null);
__decorate([
    (0, common_1.Get)('/mail/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findbymail", null);
__decorate([
    (0, common_1.Put)('/update_order/:id/:qty'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('qty')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateQTY", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map