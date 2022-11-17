import User, { IUser } from "models/user.model";

export const getAllUsers = async () => {
  return User.find({});
};
export const createUser = async (user: IUser) => {
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
  return User.findOne({ phoneNumber1: { phoneNumber } });
};
