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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.loginBodySchema = void 0;
const joi_1 = __importDefault(require("joi"));
const loginBodySchema = joi_1.default.object({
    id: joi_1.default.string().trim().required(),
    lastName: joi_1.default.string().trim().required(),
    firstName: joi_1.default.string().trim().required(),
    email: joi_1.default.string().email().trim().required()
});
exports.loginBodySchema = loginBodySchema;
function validate(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield loginBodySchema.validateAsync(body);
            console.log(result, "result");
            return true;
        }
        catch (error) {
            console.log(typeof error);
            return error;
        }
    });
}
exports.validate = validate;
