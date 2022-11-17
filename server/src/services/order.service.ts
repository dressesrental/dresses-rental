import Order, { IOrder } from "models/order.model";

export async function getAllOrders(){
    console.log("getOrdersSevice");
    return Order.find({});
}

export async function createOrder(order:IOrder){
    console.log("getOrdersService");
    try{
        return await Order.create(order);
    }catch(error: any){
        throw new Error(error);
    }
}