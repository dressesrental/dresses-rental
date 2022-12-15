import User, { IAdress, IUser } from "models/user.model";
import mongoose, { ObjectId } from "mongoose";
import { log } from "node:console";
import { IUserDetails } from "../../../client/src/types/types";

export const getAllUsers = async () => {
  log("getUsers");
  return User.find({});
};
export const createUser = async (user: IUserDetails) => {
  try {
    console.log("create user" + { ...user });
    const userc = await User.create(user);
    console.log("gg" + userc);
    return userc;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const getUserByPhoneNumber = async (phoneNumber: string) => {
  console.log("getbynumSer " + `${phoneNumber}`);
  return await User.findOne({ phoneNumber1: phoneNumber });
};

export const editUser = async (user: IUserDetails) => {
  console.log("edit user serv");
  try {
    const userc = await User.findOneAndUpdate({ _id: user._id }, user, {
      new: true,
    });
    console.log("user" + userc);
    return userc;
  } catch (error: any) {
    throw new Error(error);
  }
};
