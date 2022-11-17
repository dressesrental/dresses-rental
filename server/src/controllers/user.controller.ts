import log from "loglevel";
import { Request, Response } from "express";
import {
  createUser,
  getAllUsers,
  getUserByPhoneNumber,
} from "services/user.service";
import { info } from "console";

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
  req: Request,
  res: Response
) => {
  const { phoneNumber } = req.params;
  const user = await getUserByPhoneNumber(phoneNumber);
  if (!user) {
    return res.sendStatus(404);
  }
  return res.status(200).send(user);
};