import express, { Request } from 'express';
//import { getAllDress } from 'controllers/Controller';
import { creatOrderController, getAllOrdersController } from 'controllers/order.controller';
import { createUserController, editUserController, getUserByPhoneNumberController, getUsersController } from 'controllers/user.controller';
 
export const router = express.Router();
 
//router.route("/").get(getAllDress);
router.route("/getOrders").get(getAllOrdersController);
router.route("/add").post(creatOrderController);
router.route('/users').get(getUsersController);
router.route('/createUser').post(createUserController);
 router.route('/getByPhoneNumber/:phoneNumber1').get(getUserByPhoneNumberController);
 router.route('/editUser').put(editUserController);
