import mongoose, { Schema } from "mongoose";
import { IOrder } from "./Odarinterface";

const OrderSchema = new Schema<IOrder>({
    product: String,
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now }
  },
  {
    timestamps: true,
    versionKey: false,
},
);
  
  export const Order  =  mongoose.model<IOrder>('Order', OrderSchema);