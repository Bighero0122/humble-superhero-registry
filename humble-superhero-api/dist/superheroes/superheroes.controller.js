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
exports.SuperheroesController = void 0;
const common_1 = require("@nestjs/common");
const superheroes_service_1 = require("./superheroes.service");
const create_superhero_dto_1 = require("./dto/create-superhero.dto");
let SuperheroesController = class SuperheroesController {
    constructor(superheroesService) {
        this.superheroesService = superheroesService;
    }
    create(createSuperheroDto) {
        return this.superheroesService.create(createSuperheroDto);
    }
    findAll() {
        return this.superheroesService.findAll();
    }
};
exports.SuperheroesController = SuperheroesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_superhero_dto_1.CreateSuperheroDto]),
    __metadata("design:returntype", Object)
], SuperheroesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], SuperheroesController.prototype, "findAll", null);
exports.SuperheroesController = SuperheroesController = __decorate([
    (0, common_1.Controller)('superheroes'),
    __metadata("design:paramtypes", [superheroes_service_1.SuperheroesService])
], SuperheroesController);
//# sourceMappingURL=superheroes.controller.js.map