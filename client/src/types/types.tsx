import React from 'react';

export interface ILoginDetails {
    userName: string;
    password: string;
}

export interface ISetDresses {
    id:string;
    targetAudience?:ITargetAudience;
    sizes?: [];
    dresses?:[];
}
export interface IOrderDetails {
    id?: string;
    idCustomer?: String;
    customerName?: string;
    orderDate?: Date;
    eventDate?: Date;
    returnDate?: Date;
    amountPaid?: Number;
    dresses?: ISetDresses;
    dressesDontReturns?: [{ idDress: Number, sizes: [Number] }];
    idEmployeeResiveOrder?: Number;
    idEmployeeMadeOrder?: Number;
    idEmployeeGetOrder?: Number;
    comments?: string[];
}

export interface IDress {
    id:string;
    idSet:string;
    
}

export type ITargetAudience = "GIRLS" | "TEANS" | "WOMENS";
export interface IAdress{
    city:string;
    street:string;
}

export interface IUserDetails{
  id?:string;
  name?: string;
  phoneNumber?: string;
  email?:string;
  adress?:IAdress
}