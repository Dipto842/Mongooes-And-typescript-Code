import { Datamodel } from './../modul/Data.Schema';

import { DataCycle } from "../modul/Datainterface";

const CreatDataDB =async (data:DataCycle)=>{
    const rejart = await Datamodel.create(data)
    return rejart
}

const FineallDataDB = async ()=>{
const rejat = Datamodel.find()
return rejat
}
const FineAData = async(_id:string)=>{
    const rejat = Datamodel.findOne({_id})
    return rejat
}
const  UpdatedDB =async (_id:string,updatedDetails:DataCycle)=>{
    const rejat = await Datamodel.findByIdAndUpdate(
        _id,
        updatedDetails,
        { new: true, runValidators: true }

    )
    return rejat
}
const DeleteDB = async(_id:string)=>{
const rejart = await Datamodel.findByIdAndDelete({_id})
return rejart
}
export const DataDB ={
    CreatDataDB,
    FineallDataDB,
    FineAData,
    UpdatedDB,
    DeleteDB
}