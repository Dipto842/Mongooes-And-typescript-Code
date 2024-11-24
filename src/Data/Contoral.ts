import { Request, Response } from "express";
import { DataDB } from "./DataSarvis";

const CreateBicycle= async(req:Request,res:Response)=>{
try{
    const data = req.body

    const rejart = await DataDB.CreatDataDB(data)

    res.status(200).json({
        success:true,
        message:'Bicycle created successfully',
        data:rejart
    })
    
}catch(err){
    console.log(err);
    
}


}


const fine = async(req:Request,res:Response)=>{
    try{

        const rejart = await DataDB.FineallDataDB()
        res.status(200).json({
            success:true,
            message:'Bicycles retrieved successfully',
            data:rejart
        })

    }catch(err){
console.log(err);

    }
}
const fineaData = async (req:Request,res:Response)=>{
   try{
    const  {_id} = req.params
    const rejart = await DataDB.FineAData(_id)
    res.status(200).json({
        success:true,
        message:'Bicycles retrieved successfully',
        data:rejart
    })
   }catch(err){
console.log(err);

   }
}


const UpdateData = async(req:Request,res:Response)=>{
try{
    const updatedDetails = req.body
    const  {_id} = req.params
    const rejat =await DataDB.UpdatedDB(_id,updatedDetails)
    res.status(200).json({
        success:true,
        message:'Bicycle details to update',
        data:rejat
    })
}catch(err){
console.log(err);

}
}
const DeleteData =async (req:Request , res:Response)=>{
   try{
    const {_id}=req.params
    const rejart = await DataDB.DeleteDB(_id)
    res.status(200).json({
        success:true,
        message:' Success message confirming the bicycle has been deleted.',
        data:rejart
    })
   }catch(err){
    console.log(err);
    
   }
    
}
export const DataContolar ={
    CreateBicycle,
    fine,
    fineaData,
    UpdateData,
    DeleteData
}