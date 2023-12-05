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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const password_hasher_service_1 = require("./auth/password-hasher/password-hasher.service");
let UsersService = class UsersService {
    constructor(userModel, hasherService) {
        this.userModel = userModel;
        this.hasherService = hasherService;
    }
    async signup(user) {
        const finduser = await this.userModel.findOne({ email: user.email });
        if (finduser) {
            throw new common_1.UnauthorizedException(`user already created with this ${user.email}`);
        }
        const encryptedPass = await this.hasherService.hashPassword(user.password);
        const newUser = new this.userModel({
            name: user.name,
            password: encryptedPass,
            image: user?.image,
            email: user.email,
            user_role: user?.user_role
        });
        await newUser.save();
        return { email: user.email };
    }
    async login(doc) {
        const finduser = await this.userModel.findOne({ email: doc.email });
        if (!finduser) {
            throw new common_1.UnauthorizedException(`${doc.email}, Invalid email`);
        }
        const matchedPass = await this.hasherService.comparePassword(doc.password, finduser.password);
        if (matchedPass) {
            return { token: 'ok' };
        }
        else {
            throw new common_1.UnauthorizedException(`Invalid Password`);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Users')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        password_hasher_service_1.PasswordHasherService])
], UsersService);
//# sourceMappingURL=users.service.js.map