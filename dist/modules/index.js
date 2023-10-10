"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("../config/express"));
const main = () => {
    try {
        express_1.default.listen(3000);
    }
    catch (error) {
        console.log(error);
    }
};
//# sourceMappingURL=index.js.map