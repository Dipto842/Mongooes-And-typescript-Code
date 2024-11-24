import express  from "express";
import { DataContolar } from "./Contoral";
const router = express.Router()
// 1. Create Data
router.post('/CreateData',DataContolar.CreateBicycle)

// 2.retrieved Data
router.get('/retrieved',DataContolar.fine)
//  3 Fine A  Data
router.get('/retrieved/:_id',DataContolar.fineaData)
router.put('/update/:_id',DataContolar.UpdateData)
router.delete('/delete/:_id',DataContolar.DeleteData)

export const DataRout = router
