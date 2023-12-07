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
exports.OrderDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class OrderDTO {
}
exports.OrderDTO = OrderDTO;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        name: 'product id',
        description: 'auto generated field (not required for body)',
        type: Number,
        example: '*not required*'
    }),
    __metadata("design:type", Number)
], OrderDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        name: 'delivery date',
        type: String,
        example: 'date string',
    }),
    __metadata("design:type", String)
], OrderDTO.prototype, "del_date", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        name: 'delivery status',
        type: String,
        example: 'date status',
    }),
    __metadata("design:type", Number)
], OrderDTO.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        name: 'order price',
        type: String,
        example: 'total price',
    }),
    __metadata("design:type", Number)
], OrderDTO.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        name: 'expected delivery',
        type: String,
        example: 'date',
    }),
    __metadata("design:type", String)
], OrderDTO.prototype, "delDate_start", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        name: 'last delivery date',
        type: String,
        example: 'date',
    }),
    __metadata("design:type", String)
], OrderDTO.prototype, "delDate_end", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        name: 'seller email',
        description: 'email of the seller',
        type: String,
        example: 'dev@gmail.com'
    }),
    __metadata("design:type", String)
], OrderDTO.prototype, "seller_email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        name: 'seller phone number',
        type: String,
        example: '+880151515115'
    }),
    __metadata("design:type", String)
], OrderDTO.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        name: 'buyer email',
        description: 'email of the buyer',
        type: String,
        example: 'dev@gmail.com'
    }),
    __metadata("design:type", String)
], OrderDTO.prototype, "buyer_email", void 0);
//# sourceMappingURL=order.dto.js.map