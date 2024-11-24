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
exports.DataContolar = exports.getProducts = void 0;
const DataSarvis_1 = require("./DataSarvis");
const CreateBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const rejart = yield DataSarvis_1.DataDB.CreatDataDB(data);
        res.status(200).json({
            success: true,
            message: 'Bicycle created successfully',
            data: rejart
        });
    }
    catch (err) {
        console.log(err);
    }
});
const fine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rejart = yield DataSarvis_1.DataDB.FineallDataDB();
        res.status(200).json({
            success: true,
            message: 'Bicycles retrieved successfully',
            data: rejart
        });
    }
    catch (err) {
        console.log(err);
    }
});
const fineaData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const rejart = yield DataSarvis_1.DataDB.FineAData(_id);
        res.status(200).json({
            success: true,
            message: 'Bicycles retrieved successfully',
            data: rejart
        });
    }
    catch (err) {
        console.log(err);
    }
});
const UpdateData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedDetails = req.body;
        const { _id } = req.params;
        const rejat = yield DataSarvis_1.DataDB.UpdatedDB(_id, updatedDetails);
        res.status(200).json({
            success: true,
            message: 'Bicycle details to update',
            data: rejat
        });
    }
    catch (err) {
        console.log(err);
    }
});
const DeleteData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const rejart = yield DataSarvis_1.DataDB.DeleteDB(_id);
        res.status(200).json({
            success: true,
            message: ' Success message confirming the bicycle has been deleted.',
            data: rejart
        });
    }
    catch (err) {
        console.log(err);
    }
});
const Odar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product, quantity } = req.body;
        const rejat = yield DataSarvis_1.DataDB.odarDB(product, quantity);
        res.status(200).json({
            success: true,
            message: ' Success message confirming the bicycle has been deleted.',
            data: rejat
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchTerm = req.query.searchTerm;
    try {
        const rejat = yield DataSarvis_1.DataDB.searchData(searchTerm);
        res.status(200).json({
            success: true,
            message: ' Success message confirming the bicycle has been deleted.',
            data: rejat
        });
    }
    catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Server Error' });
    }
});
exports.getProducts = getProducts;
const getRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const revenue = yield DataSarvis_1.DataDB.getTotalRevenue();
        res.status(200).json({
            success: true,
            totalRevenue: revenue,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error calculating total revenue",
            success: false,
            error: error.message,
        });
    }
});
exports.DataContolar = {
    CreateBicycle,
    fine,
    fineaData,
    UpdateData,
    DeleteData,
    Odar,
    getProducts: exports.getProducts,
    getRevenue
};
