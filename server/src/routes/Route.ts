import express from 'express';
//import { getAllDress } from 'controllers/Controller';
import { creatOrderController, getAllOrdersController } from 'controllers/order.controller';
import { createUserController, getUsersController } from 'controllers/user.controller';
 
export const router = express.Router();
 
//router.route("/").get(getAllDress);
router.route("/getOrders").get(getAllOrdersController);
router.route("/add").post(creatOrderController);
router.route('/users').get(getUsersController);
router.route('/createUser').post(createUserController);