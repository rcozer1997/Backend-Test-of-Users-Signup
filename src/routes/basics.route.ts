const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
import {validateId} from "../middlewares/validate"
import {createUserController} from "../controllers/users/users.controller"
import {findUsersController} from "../controllers/users/users.controller"
import {deleteUsersController} from "../controllers/users/users.controller"
import {updateUserController} from "../controllers/users/users.controller"

router.get('/', findUsersController);

router.post('/user', createUserController);

//router.put('/:id', validateId,usersController.update);

router.delete('/:id', deleteUsersController);

router.patch('/:id', updateUserController)
module.exports = router;