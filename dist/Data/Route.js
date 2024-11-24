"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRout = void 0;
const express_1 = __importDefault(require("express"));
const Contoral_1 = require("./Contoral");
const router = express_1.default.Router();
// 1. Create Data
router.post('/CreateData', Contoral_1.DataContolar.CreateBicycle);
// 2.retrieved Data
router.get('/', Contoral_1.DataContolar.fine);
//  3 Fine A  Data
router.get('/:_id', Contoral_1.DataContolar.fineaData);
// 4  Update Data
router.put('/:_id', Contoral_1.DataContolar.UpdateData);
// 5 Delete Data
router.delete('/:_id', Contoral_1.DataContolar.DeleteData);
router.get('/', Contoral_1.DataContolar.getProducts);
// router.get('api/products?searchTerm=',DataContolar.searchTerm)
exports.DataRout = router;
