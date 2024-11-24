import mongoose from "mongoose";

export type IOrder= {
    product: string,
    quantity: number;
    totalPrice: number;
    orderDate: Date;
  }