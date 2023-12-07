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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateProductDTO {
}
exports.UpdateProductDTO = UpdateProductDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        name: 'product name',
        description: 'name of the product to add',
        type: String,
        example: 'Murgir dim'
    }),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        name: 'product image',
        description: 'must be added with product information',
        type: String,
        example: '<image_uri>'
    }),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        name: 'product price',
        description: 'price of the product in number type',
        type: Number,
        example: '10'
    }),
    __metadata("design:type", Number)
], UpdateProductDTO.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        name: 'product quantity',
        description: 'quantity of the product that user have',
        type: Number,
        example: '50'
    }),
    __metadata("design:type", Number)
], UpdateProductDTO.prototype, "qty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        name: 'product description',
        description: 'information and features about the product',
        type: String,
        example: 'text info....'
    }),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "desc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        name: 'product rating',
        description: 'rating provided by customers',
        type: Number,
        example: '50'
    }),
    __metadata("design:type", Number)
], UpdateProductDTO.prototype, "rating", void 0);
//# sourceMappingURL=update-product.dto.js.map