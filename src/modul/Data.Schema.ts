import mongoose, { Schema, model, connect } from "mongoose";
import { DataCycle } from "./Datainterface";

 const dataSchema =new Schema<DataCycle>({
    id:String,
    title: String,
    brand:String,
    price:Number,
    category:String,
    type:String,
    description:String,
    quantity:Number,
    inStock:Boolean,
   
},
{
    timestamps: true,
    versionKey: false,
},
)


export const Datamodel = model<DataCycle>('data',dataSchema)