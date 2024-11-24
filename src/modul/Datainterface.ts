import mongoose, { Schema, model, connect } from "mongoose";

export type DataCycle = {
    id:string,
  title: string;
  brand:string,
  price:number,
  category:string,
  type:string,
  description:string,
  quantity:number,
  inStock:boolean,
  createdAt?: Date;
  updatedAt?: Date;
};




