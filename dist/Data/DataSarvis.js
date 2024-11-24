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
exports.DataDB = void 0;
const Data_Schema_1 = require("./../modul/Data.Schema");
const Odar_Schema_1 = require("../modul/Odar.Schema");
// 1  CreatDataDB 
const CreatDataDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const rejart = yield Data_Schema_1.Datamodel.create(data);
    return rejart;
});
// 2 FineallDataDB
const FineallDataDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const rejat = Data_Schema_1.Datamodel.find();
    return rejat;
});
// 3 FineAData
const FineAData = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const rejat = Data_Schema_1.Datamodel.findOne({ _id });
    return rejat;
});
// 4 UpdatedDB
const UpdatedDB = (_id, updatedDetails) => __awaiter(void 0, void 0, void 0, function* () {
    const rejat = yield Data_Schema_1.Datamodel.findByIdAndUpdate(_id, updatedDetails, { new: true, runValidators: true });
    return rejat;
});
//  5 DeleteDB
const DeleteDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const rejart = yield Data_Schema_1.Datamodel.findByIdAndDelete({ _id });
    return rejart;
});
//  6 odarDB
const odarDB = (product, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield Data_Schema_1.Datamodel.findById(product);
    //  yodi products khuje na pay tahole Error dibe 
    if (!products) {
        throw new Error('Product not found');
    }
    // yodi stock n thake to Error dibe 
    if (products.quantity < quantity) {
        throw new Error('not stock');
    }
    products.quantity -= quantity;
    if (products.quantity === 0) {
        products.inStock = false;
    }
    yield products.save();
    const totalPrice = products.price * quantity;
    const order = new Odar_Schema_1.Order({
        product: product,
        quantity,
        totalPrice
    });
    yield order.save();
    return { order: order, inStock: products.quantity };
});
// 7 searchData
const searchData = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const query = searchTerm
        ? {
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { brand: { $regex: searchTerm, $options: 'i' } },
                { type: { $regex: searchTerm, $options: 'i' } },
            ],
        }
        : {}; // If no search term, return all products
    const rejat = yield Data_Schema_1.Datamodel.find(query);
    return rejat;
});
const getTotalRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Odar_Schema_1.Order.aggregate([
            {
                $project: {
                    totalPrice: { $multiply: ["$price", "$quantity"] },
                },
            },
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: "$totalPrice" },
                },
            },
        ]);
        // If there's no data, return 0 revenue
        return result.length > 0 ? result[0].totalRevenue : 0;
    }
    catch (erro) {
        throw new Error("Failed to calculate revenue: " + erro.message);
    }
});
exports.DataDB = {
    CreatDataDB,
    FineallDataDB,
    FineAData,
    UpdatedDB,
    DeleteDB,
    odarDB,
    searchData,
    getTotalRevenue
};
