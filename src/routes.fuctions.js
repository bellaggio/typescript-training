"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.routes = void 0;
const express_1 = require("express");
const auditAddressController = require("../src/infra/controller/AuditAddressesController");
exports.routes = (0, express_1.Router)();
exports.routes.get('/audit_address', auditAddressController.getDuplicatedAddress);
