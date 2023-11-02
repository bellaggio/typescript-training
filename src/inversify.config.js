"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.myContainer = void 0;
const inversify_1 = require("inversify");
const Types_1 = require("./src/infra/types/Types");
const AddressesRepository_1 = __importDefault(require("./src/infra/repository/AddressesRepository"));
const myContainer = new inversify_1.Container();
exports.myContainer = myContainer;
myContainer.bind(Types_1.TYPES.AddressesRepositoryInterface).to(AddressesRepository_1.default);
