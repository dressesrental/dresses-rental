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

export type IMode = "MANAGER" | "EMPLOYEE" | "NON";
export interface IAdress{
    city:string;
    street:string;
    number:number;
}

export interface IUserDetails{
    _id?:string;
    name?: string;
    phoneNumber1?: string;
    phoneNumber2?: string;
    email?:string;
    adress?:IAdress
  }