import mongoose, { Schema } from 'mongoose';

export interface IOrder{
id:String,
customerId?:String;
orderDate?:Date;
eventDate?:Date;
takenDate?:Date;
returnDate?:Date;
amountPaid?:Number;
dressse?:Array<String>;
//dresses: [{idDress: Number , sizes: [ Number] } ]
dressesDontPreper?:String[];
dressesDontReturns?:String[];
idEmployeePrepsreOrder?:String;
idEmployeeResiveOrder?: String;
comments?:String[];
}

const OrderSchema: Schema<IOrder> = new mongoose.Schema({
    id:{type:String},
    customerId:{type:String},
    orderDate:{type:Date},
    eventDate:{type:Date},
    takenDate:{type:Date},
    returnDate:{type:Date},
    amountPaid:{type:Number},
    dressse:{type:Array<String>},
    //dresses: [{idDress: Number , sizes: [ Number] } ]
    dressesDontPreper:{type:Array<String>},
    dressesDontReturns:{type:Array<String>},
    idEmployeePrepsreOrder:{type:String},
    idEmployeeResiveOrder: {type:String},
    comments:{type:Array<String>},
  });

  const Order=mongoose.model("Order",OrderSchema);

  export default Order;