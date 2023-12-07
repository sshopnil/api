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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OrderService = class OrderService {
    constructor(orderModel, connection) {
        this.orderModel = orderModel;
        this.connection = connection;
    }
    async createOrder(order) {
        const newOrder = new this.orderModel(order);
        await newOrder.save();
        return true;
    }
    async findbySellermail(email) {
        return await this.orderModel.find({ seller_email: email });
    }
    async findbyBuyermail(email) {
        return await this.orderModel.find({ buyer_email: email });
    }
    async updateAction(id, orderUpdate) {
        const findProd = await this.orderModel.findOne({ id });
        if (!findProd) {
            throw new common_1.NotFoundException('Product not found!');
        }
        const filter = { id };
        const update = await this.orderModel.findOneAndUpdate(filter, orderUpdate, { new: true });
        return update;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('orders')),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Connection])
], OrderService);
//# sourceMappingURL=order.service.js.map