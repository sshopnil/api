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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const order_dto_1 = require("./dto/order.dto");
const update_order_dto_1 = require("./dto/update-order.dto");
let OrderController = class OrderController {
    constructor(orderServ) {
        this.orderServ = orderServ;
    }
    async addProd(order) {
        return this.orderServ.createOrder(order);
    }
    async findbyseller(email) {
        return this.orderServ.findbySellermail(email);
    }
    async findbybuyer(email) {
        return this.orderServ.findbyBuyermail(email);
    }
    async updateProd(id, updatedInfo) {
        return this.orderServ.updateAction(id, updatedInfo);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_1.OrderDTO]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "addProd", null);
__decorate([
    (0, common_1.Get)('seller/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "findbyseller", null);
__decorate([
    (0, common_1.Get)('buyer/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "findbybuyer", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_order_dto_1.UpdateOrderDTO]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateProd", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map