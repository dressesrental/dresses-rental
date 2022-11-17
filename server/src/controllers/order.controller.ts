import { Request,Response } from "express";
import { createOrder, getAllOrders } from "services/order.service";
import {omit, result} from 'lodash';

export async function creatOrderController(req:Request, res:Response){
    console.log("createOrdersController");
    try{
        const order=await createOrder(req.body);
        return res.status(201).send(order);
    }catch(error: any){
        console.log(error);
        return res.status(409).send(error.message);
    }

}

export async function getAllOrdersController(req:Request, res: Response){
    console.log("getOrdersController");
    const orders=await getAllOrders();
    console.log({orders});
    if(!orders){
        return res.sendStatus(404);
    }
    return res.status(200).send(orders);
}