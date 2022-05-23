const express = require('express');
const router = express.Router();
//const usersController = require('../controllers/users.controller');
import {validateSchema} from "../middlewares/validate"
import * as UserController from "../controllers/users/users.controller"
import {signupSchema} from "../schema/auth"

router.get('/users', UserController.findUsersController);

router.post('/user', validateSchema(signupSchema), UserController.createUserController);

router.delete('/:id', UserController.deleteUsersController);

router.patch('/:id', UserController.updateUserController);

export default router;