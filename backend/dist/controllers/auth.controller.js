"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const register_validator_1 = require("../validators/register.validator");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.login = login;
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isValidBody = yield (0, register_validator_1.validate)(req.body);
        console.log(isValidBody);
        return res.status(201).json({ message: 'User created' });
    }
    catch (error) {
        return res.status(401).json({ message: "Bad request", error: error });
    }
});
exports.register = register;
