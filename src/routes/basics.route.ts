const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
import {validateId} from "../middlewares/validate"
import {createUserController} from "../controllers/users/users.controller"
import {findUsersController} from "../controllers/users/users.controller"

router.get('/', findUsersController);

router.post('/user', createUserController);

router.put('/:id', validateId,usersController.update);

router.delete('/:id', usersController.remove);

router.patch('/:id', )
module.exports = router;