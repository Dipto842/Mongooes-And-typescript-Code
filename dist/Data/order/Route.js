"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OdarRout = void 0;
const express_1 = __importDefault(require("express"));
const Contoral_1 = require("../Contoral");
const router = express_1.default.Router();
router.post('/', Contoral_1.DataContolar.Odar);
router.get('/revenue', Contoral_1.DataContolar.getRevenue);
exports.OdarRout = router;
