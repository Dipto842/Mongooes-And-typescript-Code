import express  from "express";
import { DataContolar } from "../Contoral";

const router = express.Router()


router.post('/', DataContolar.Odar);
router.get('/revenue', DataContolar.getRevenue);

export const OdarRout = router