import express  from "express";
import { DataContolar, getProducts } from "./Contoral";
const router = express.Router()
// 1. Create Data
router.post('/CreateData',DataContolar.CreateBicycle)

// 2.retrieved Data
router.get('/',DataContolar.fine)
//  3 Fine A  Data
router.get('/:_id',DataContolar.fineaData)
// 4  Update Data
router.put('/:_id',DataContolar.UpdateData)
// 5 Delete Data
router.delete('/:_id',DataContolar.DeleteData)

router.get('/', DataContolar.getProducts);
// router.get('api/products?searchTerm=',DataContolar.searchTerm)

export const DataRout = router
