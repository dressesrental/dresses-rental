import log from "loglevel";
import { Request, Response } from "express";
import {
  createUser,
  editUser,
  getAllUsers,
  getUserByPhoneNumber,
} from "services/user.service";
import { IUserDetails } from "../../../client/src/types/types";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    return res.status(201).send(user);
  } catch (error: any) {
    log.error(error.message);
    console.log("error user" + error.message);
    return res.status(409).send(error.message);
  }
};

export const getUsersController = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  log.info(users);
  if (!users) {
    return res.sendStatus(404);
  }
  return res.status(200).send(users);
};

export const getUserByPhoneNumberController = async (
  req: Request<reqT>,
  res: Response<IUserDetails>
) => {
  console.log("byPhoncontroller");
  const phoneNumber = req.params.phoneNumber1;
  const user: IUserDetails | any = await getUserByPhoneNumber(`${phoneNumber}`);
  if (!user) {
    res.sendStatus(404);
  }
  if (user) res.status(200).send(user);
};

export const editUserController = async (req: Request, res: Response) => {
  console.log("edit-user-controller");
  try {
    const user: IUserDetails | any = await editUser(req.body);
    console.log({ ...user });
    return res.status(201).send(user);
  } catch (error: any) {
    log.error(error.message);
    console.log("error user" + error.message);
    return res.status(409).send(error.message);
  }
};

interface reqT {
  phoneNumber1: string;
}
