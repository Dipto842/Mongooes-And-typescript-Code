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
    
};

const Odar= async(req:Request , res:Response)=>{
    try{
        const { product, quantity } = req.body;

      
      
        
        const rejat =await DataDB.odarDB(product,quantity);

        res.status(200).json({
            success:true,
            message:' Success message confirming the bicycle has been deleted.',
            data:rejat
        })
    }catch(err){
console.log(err);

    }
};

export const getProducts = async (req: Request, res: Response) => {
    const searchTerm = req.query.searchTerm as string;

    try {
        const rejat = await DataDB.searchData(searchTerm);
        res.status(200).json({
            success:true,
            message:' Success message confirming the bicycle has been deleted.',
            data:rejat
        })
    } catch (error:any) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Server Error' });
    }
};

 const getRevenue = async (req: Request, res: Response) => {
    try {
       
      const revenue = await DataDB.getTotalRevenue();
      res.status(200).json({
        success: true,
        totalRevenue: revenue,
      });
    } catch (error:any) {
      res.status(500).json({
        message: "Error calculating total revenue",
        success: false,
        error: error.message,
      });
    }
  };
export const DataContolar ={
    CreateBicycle,
    fine,
    fineaData,
    UpdateData,
    DeleteData,
    Odar,
    getProducts,
    getRevenue
  
}