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
    idCustomer?: Number;
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

