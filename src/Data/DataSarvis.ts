import { Datamodel } from './../modul/Data.Schema';

import { DataCycle } from "../modul/Datainterface";
import { Order } from '../modul/Odar.Schema';
// 1  CreatDataDB 
const CreatDataDB =async (data:DataCycle)=>{
    const rejart = await Datamodel.create(data)
    return rejart
}


// 2 FineallDataDB
const FineallDataDB = async ()=>{
const rejat = Datamodel.find()
return rejat
}

// 3 FineAData
const FineAData = async(_id:string)=>{
    const rejat = Datamodel.findOne({_id})
    return rejat
}
// 4 UpdatedDB
const  UpdatedDB =async (_id:string,updatedDetails:DataCycle)=>{
    const rejat = await Datamodel.findByIdAndUpdate(
        _id,
        updatedDetails,
        { new: true, runValidators: true }

    )
    return rejat
}
//  5 DeleteDB
const DeleteDB = async(_id:string)=>{
const rejart = await Datamodel.findByIdAndDelete({_id})
return rejart
}
//  6 odarDB
const odarDB = async (product:string,quantity:number)=>{
    const products = await Datamodel.findById(product);
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
      await products.save();

    
    const totalPrice = products.price * quantity;
    const order = new Order({
      product: product,
      quantity,
      totalPrice
    });
    await order.save();
    return { order: order, inStock: products.quantity };
}

// 7 searchData

 const searchData = async (searchTerm: string) => {
    const query = searchTerm
        ? {
              $or: [
                  { name: { $regex: searchTerm, $options: 'i' } }, 
                  { brand: { $regex: searchTerm, $options: 'i' } }, 
                  { type: { $regex: searchTerm, $options: 'i' } },  
              ],
          }
        : {}; // If no search term, return all products
const rejat = await Datamodel.find(query);
    return  rejat
};


const getTotalRevenue = async () => {
    try {
      const result = await Order.aggregate([
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
    } catch (erro:any) {
      throw new Error("Failed to calculate revenue: " + erro.message);
    }
  };


export const DataDB ={
    CreatDataDB,
    FineallDataDB,
    FineAData,
    UpdatedDB,
    DeleteDB,
    odarDB,
    searchData,
    getTotalRevenue
}